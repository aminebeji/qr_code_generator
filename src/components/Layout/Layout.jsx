// components/Layout.js
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./NavBar.jsx";
const Layout = ({ children }) => {
  return (
    <Flex>
      <Box w="100%">
        <Navbar />
        <Box p="4" className="boxContainer">{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
