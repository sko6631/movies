import { Stack, Text } from "@chakra-ui/react";
import { MdOutlineLocalMovies, MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height="80px"
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          svg: {
            fill: "blue.600",
          },
        }}
      >
        <MdOutlineLocalMovies size="24px" />
        <Text fontWeight="bold" fontSize="xl" color="blue.600">
          Movies
        </Text>
      </Stack>
      <MdOutlineShoppingCart size="24px" />
    </Stack>
  );
};
