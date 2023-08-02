// components/Navbar.js
import React from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { LuQrCode } from "react-icons/lu";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      p="4"
      bg="teal.500"
      color="white"
      wrap={true}
    >
      <Flex justify={"center"} align={"center"}>
        <LuQrCode className="logo_icon" />{" "}
        <h6 className="logo_title">Qr Code Gen</h6>
      </Flex>
      <Flex gap={50}>
        <Link href="/"> Home </Link>
        <Link href="/faq"> FAQ </Link>
        <Link href="https://aminebeji.github.io/portfolio/" isExternal>
          {" "}
          Contact Me{" "}
        </Link>
      </Flex>
      <IconButton
        aria-label="Toggle Dark/Light Mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
