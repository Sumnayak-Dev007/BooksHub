import { HStack, VStack, Image, Button,  useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ColormodeSwitch from "./ColormodeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/brain.svg"; // adjust your logo import path

interface Props {
  onSearch: (value: string) => void;
}

function Navbar({ onSearch }: Props) {
  const navigate = useNavigate();

  // Decide layout based on screen size
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <VStack
      spacing={isMobile ? 3 : 0}
      align="stretch"
      padding="15px"
      w="100%"
    >
      <HStack justifyContent="space-between" w="100%">
        <Image src={logo} boxSize="60px" />
        {!isMobile && <SearchInput onSearch={onSearch} />}
        <HStack spacing={3}>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            onClick={() => navigate("/api-docs")}
          >
            API Docs
          </Button>
          <ColormodeSwitch />
        </HStack>
      </HStack>

      {/* On mobile, move search input below */}
      {isMobile && (
        <SearchInput onSearch={onSearch} />
      )}
    </VStack>
  );
}

export default Navbar;

