import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box margin="auto" maxWidth="1400px" px={4}>
      {children}
    </Box>
  );
};
