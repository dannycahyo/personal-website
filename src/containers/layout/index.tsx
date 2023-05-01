import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
