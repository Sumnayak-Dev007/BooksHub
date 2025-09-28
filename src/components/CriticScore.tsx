import { Badge,Text } from '@chakra-ui/react';
import { FaStar } from "react-icons/fa";
interface Props {
    rating: number;
}

const CriticScore = ({ rating }:Props) => {
     const color = rating >= 3 ? "green" : "yellow";

  return (
    <Badge
      colorScheme={color}
      px={2}
      py={1}
      borderRadius="md"
      display="inline-flex"
      alignItems="center"
      gap={1}
    >
      <Text fontWeight="bold" fontSize="sm">{rating.toFixed(1)}</Text>
      <FaStar size={12} />
    </Badge>
  );
}

export default CriticScore
