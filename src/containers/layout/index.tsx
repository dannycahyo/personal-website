import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container maxW="120rem">
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Container>
  );
};

export default Layout;
