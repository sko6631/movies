import { Stack } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    <Stack direction="row" justifyContent="flex-end" py={4}>
      <MdOutlineShoppingCart size="24px" />
    </Stack>
  );
};
