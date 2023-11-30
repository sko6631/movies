import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { useBasket } from "../../hooks/useBasket";

type BasketProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
};

export const Basket: FC<BasketProps> = ({ isOpen, onClose, btnRef }) => {
  const { basket } = useBasket();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Votre panier</DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Fermer
          </Button>
          <Button colorScheme="blue">Commander</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
