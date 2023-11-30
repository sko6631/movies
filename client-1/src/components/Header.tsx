import { Stack, Text } from "@chakra-ui/react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { BasketButton } from "./Basket/BasketButton";

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
      <BasketButton />
    </Stack>
  );
};
