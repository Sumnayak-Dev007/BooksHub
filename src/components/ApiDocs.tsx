// src/components/ApiDocs.tsx
import { Suspense, lazy, useEffect, useState } from "react";
import { Box, Spinner, Center, Text, Code, Collapse, Button } from "@chakra-ui/react";
import YAML from "js-yaml";

type DefinitionObject = Record<string, any> | undefined;

// Lazy-load RedocStandalone (Vite compatible)
const RedocStandalone = lazy(() =>
  import("redoc").then((mod) => ({ default: mod.RedocStandalone }))
);

/**
 * Helper: canonical path names to try when looking for the endpoint,
 * because some specs use /treasure/ vs /api/treasure/
 */
const possibleTreasurePaths = ["/api/treasure/", "/treasure/"];

const treasureExample = {
  count: 0,
  next: "http://example.com",
  previous: "http://example.com",
  results: [
    {
      pk: 0,
      title: "string",
      author: "string",
      auth_image: "http://example.com",
      content: "string",
      genre: "self-help",
      price: "string",
      parent_formats: {},
      sale_price: "string",
      my_discount: "string",
      public: true,
      edit_url: "string",
      url: "http://example.com",
      image_url: "http://example.com",
      ratings_count: 0,
      copies_sold: 4294967295,
      posted_by: "string",
    },
  ],
};

export default function ApiDocs() {
  const [definition, setDefinition] = useState<DefinitionObject>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [debugOpen, setDebugOpen] = useState(false);
  const [parsedPaths, setParsedPaths] = useState<string[]>([]);
  const [treasureObj, setTreasureObj] = useState<any>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchAndSanitizeSpec() {
      try {
        const res = await fetch("/swagger.yaml");
        if (!res.ok) throw new Error(`Failed to fetch swagger.yaml (${res.status})`);
        const text = await res.text();

        // parse YAML (works for YAML or JSON content)
        let doc = YAML.load(text) as Record<string, any>;
        if (!doc.openapi && !doc.swagger) {
  doc.openapi = "3.0.3";
  console.warn("No OpenAPI version found — added openapi: 3.0.3 for compatibility.");
}

        console.log("Raw parsed spec version keys:", {
          openapi: doc?.openapi,
          swagger: doc?.swagger,
        });

        // Normalize: if JSON was served as string, YAML.load will parse it too.
        if (!doc || typeof doc !== "object") {
          throw new Error("Parsed spec is not an object");
        }

        // collect path keys for quick debugging
        const paths = Object.keys(doc.paths || {});
        console.log("Parsed paths:", paths);
        if (mounted) setParsedPaths(paths);

        // Find the path key actually present for treasure
        const foundTreasurePath = possibleTreasurePaths.find((p) => p in (doc.paths || {}));
        console.log("foundTreasurePath:", foundTreasurePath);

        if (foundTreasurePath) {
          const p = doc.paths[foundTreasurePath];
          console.log("Original treasure path object:", p);
          if (mounted) setTreasureObj(p);

          // Check GET -> responses -> 200 exists
          const getOp = p.get || p.GET || p.Get;
          if (getOp && getOp.responses && getOp.responses["200"]) {
            const resp200 = getOp.responses["200"];

            // If the response has content (OpenAPI 3) or examples, Redoc will render.
            let hasRenderable = false;
            if (resp200.content) {
              // OpenAPI 3 style
              const content = resp200.content["application/json"];
              if (content && (content.example || content.examples || content.schema)) hasRenderable = true;
            }
            if (resp200.examples) hasRenderable = true;
            // swagger2 style: schema present but often ReDoc wants examples/description or examples
            if (resp200.schema) {
              // if description or examples are present, mark renderable
              if ((resp200.description && String(resp200.description).trim()) || resp200.examples) {
                hasRenderable = true;
              }
            }

            console.log("resp200 initial renderable?", hasRenderable);

            // If not renderable, inject an OpenAPI3-like content.example wrapper derived from schema or fallback
            if (!hasRenderable) {
              console.warn(
    "Treasure 200 response not renderable by Redoc — force-converting to OpenAPI3 format with example."
  );

  // Clone existing schema or fallback
  const schemaObj =
    resp200.schema ||
    resp200.content?.["application/json"]?.schema || {
      type: "object",
      properties: {
        count: { type: "integer", example: 1 },
        next: { type: "string", example: null },
        previous: { type: "string", example: null },
        results: {
          type: "array",
          items: {
            type: "object",
            properties: {
              pk: { type: "integer", example: 1 },
              title: { type: "string", example: "Sample Book" },
              author: { type: "string", example: "John Doe" },
              genre: { type: "string", example: "fiction" },
              price: { type: "string", example: "$10" },
            },
          },
        },
      },
    };

  // Inject fully OpenAPI3-compatible response
  resp200.content = {
    "application/json": {
      schema: schemaObj,
      example: treasureExample,
    },
  };

  // Give Redoc something textual to show
  resp200.description = resp200.description || "Successful response (forced render)";

  // Assign it back
  getOp.responses["200"] = resp200;
  p.get = getOp;
  doc.paths[foundTreasurePath] = p;

  if (mounted) {
    setTreasureObj(p);
    setParsedPaths(Object.keys(doc.paths || {}));
  }
            } else {
              console.log("Treasure 200 response already renderable.");
            }
          } else {
            console.warn("Treasure path present but missing GET/200 response structure.");
          }
        } else {
          console.warn("Treasure path not present in parsed spec.");
        }

        // Final doc set for Redoc
        if (mounted) {
          setDefinition(doc);
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Failed to load/parse swagger.yaml:", err);
        if (mounted) {
          setError(err.message || String(err));
          setLoading(false);
        }
      }
    }

    fetchAndSanitizeSpec();
    return () => {
      mounted = false;
    };
  }, []);

  const redocOptions = {
    hideDownloadButtons: false,
    nativeScrollbars: true,
    suppressWarnings: true,
    // you can add lazyRendering: true here if desired
  };

  const redocCssOverrides = {
    "& .menu-content": { backgroundColor: "#f8fafc" },
    "& .menu-item, & .menu-item__title": { color: "#1e293b" },
    "& .api-info__title, & .api-info__description": {
      fontFamily: "Inter, sans-serif",
    },
    "& .http-verb.get": { background: "#22c55e" },
    "& .api-info .base-url": { display: "none !important" },
    "& .redoc-error, & .redoc-error-page, & [id*='redoc-error']": {
      display: "none !important",
      visibility: "hidden !important",
      opacity: 0,
    },
    "& pre, & code": {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "13px",
      backgroundColor: "#f1f5f9",
    },
    "::-webkit-scrollbar": { width: "12px" },
    "::-webkit-scrollbar-track": { background: "#000" },
    "::-webkit-scrollbar-thumb": { background: "#444", borderRadius: "5px" },
    "::-webkit-scrollbar-thumb:hover": { background: "#666" },
  };

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh" p={4}>
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="600" mb={2}>
            Could not load API docs
          </Text>
          <Text color="gray.500" mb={4}>
            {error}
          </Text>
          <Text color="gray.400" fontSize="sm">
            Make sure <Code>/swagger.yaml</Code> is reachable and valid YAML/OpenAPI.
          </Text>
        </Box>
      </Center>
    );
  }

  return (
    <Box id="redoc-container" w="100%" h="100vh" bg="white" color="gray.800" overflowY="auto" sx={redocCssOverrides}>
      <Suspense
        fallback={
          <Center h="100vh">
            <Spinner size="xl" />
          </Center>
        }
      >
        {/* If Redoc still hides it, use the debug panel below to inspect what we passed */}
        <RedocStandalone definition={definition} options={redocOptions} router="hash" />
      </Suspense>

      {/* Debug panel — toggle when you need to inspect */}
      <Box position="fixed" right="16px" bottom="16px" zIndex={9999}>
        <Button size="sm" onClick={() => setDebugOpen((s) => !s)} mb={2}>
          {debugOpen ? "Hide Debug" : "Show Debug"}
        </Button>
        <Collapse in={debugOpen} animateOpacity>
          <Box p={3} w="420px" maxH="60vh" overflowY="auto" bg="white" boxShadow="lg" borderRadius="md">
            <Text fontWeight="600" mb={2}>
              Parsed paths ({parsedPaths.length})
            </Text>
            <Box as="pre" whiteSpace="pre-wrap" fontSize="12px" mb={3}>
              {parsedPaths.join("\n")}
            </Box>
            <Text fontWeight="600" mb={2}>
              /treasure/ object (if present)
            </Text>
            <Box as="pre" whiteSpace="pre-wrap" fontSize="12px">
              {treasureObj ? JSON.stringify(treasureObj, null, 2) : "not found"}
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
