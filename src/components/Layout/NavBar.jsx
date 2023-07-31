// components/Navbar.js
import React from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { LuQrCode } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      p="4"
      bg="teal.500"
      color="white"
    >
      <div> <LuQrCode/> </div>
      <IconButton
        aria-label="Toggle Dark/Light Mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
