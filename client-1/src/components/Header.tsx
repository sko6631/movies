import { Stack } from "@chakra-ui/react";
import { SlBasketLoaded } from "react-icons/sl";

export const Header = () => {
  return (
    <Stack direction="row" justifyContent="flex-end" py={4}>
      <SlBasketLoaded size="24px" />
    </Stack>
  );
};
