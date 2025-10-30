// src/components/ApiDocs.tsx
import React from "react";
import { RedocStandalone } from "redoc";

const ApiDocs: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <style>
        {`
          
          body, html {
            margin: 0;
            padding: 0;
            background: #ffffff;
          }
          
        `}
      </style>
      <RedocStandalone
        specUrl="/swagger.yaml"   // file in public/openapi.yaml
        options={{
          hideDownloadButton:true,
          scrollYOffset: 50,
          nativeScrollbars: true,
          untrustedSpec: true,
        }}
      />
    </div>
  );
};

export default ApiDocs;
