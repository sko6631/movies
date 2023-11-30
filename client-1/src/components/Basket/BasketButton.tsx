import { IconButton, useDisclosure } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Basket } from "./Basket";
import { useRef } from "react";

export const BasketButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Panier"
        icon={<MdOutlineShoppingCart sizeæ="24px" />}
        onClick={onOpen}
      />
      <Basket isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
