import { Box, Flex, Input, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import QROptions from "./QROptions";
import QrCode from "../Qr/QrCode";
function Wifi() {
  var states = {
    name: null,
    password: null,
    isEmailError: false,
    isPasswordError: false,
    value: "",
  };
  const [state, setState] = useState(states);
  var [Logo, setLogo] = useState(null);
  const handleInputChange = (e) => {
    var newValue = "";
    if (e.target.name === "name")
      newValue = `WIFI:T:WPA;S:${e.target.value};P:${state.password};;`;
    else newValue = `WIFI:T:WPA;S:${state.name};P:${e.target.value};;`;
    setState({ ...state, [e.target.name]: e.target.value, value: newValue });

    console.log(state);
  };

  var colorState = {
    bgColor: "#000000",
    edgeColor: "#e9e9e9",
  };
  var [colors, setColors] = useState(colorState);
  var updateColor = (type, value) => {
    if (type === "bg") setColors({ ...colors, bgColor: value });
    else setColors({ ...colors, edgeColor: value });
  };
  var updateLogo = (e) => {
    if (e === null) {
      setLogo(null);
      return;
    }
    const selectedFile = e.target.files[0];
    const blobURL = URL.createObjectURL(selectedFile);
    console.log(blobURL);
    setLogo(blobURL);
  };
  return (
    <Flex>
      <Box
        w="57.5%"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <FormControl isInvalid={state.isEmailError}>
          <FormLabel>Wifi Name</FormLabel>
          <Input
            name="name"
            type="text"
            value={state.name}
            onChange={handleInputChange}
          />
          {!state.isEmailError ? (
            <FormHelperText>Enter the Name of your wifi</FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <Spacer h={"10"} />
        <FormControl isInvalid={state.isPasswordError}>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={state.password}
            onChange={handleInputChange}
          />
          {!state.isPasswordError ? (
            <FormHelperText>Enter the password of your wifi</FormHelperText>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Spacer h={"10"} />

        <QROptions
          changeLogo={(e) => {
            updateLogo(e);
          }}
          logo={Logo}
          colors={colors}
          updateColor={updateColor}
        />
      </Box>
      <Spacer />
      <Box
        bg={{ base: "#EDF2F7", dark: "dark.lighterGray" }}
        w="40%"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QrCode
          value={state.value}
          fgColor={colors.edgeColor}
          bgColor={colors.bgColor}
          logo={Logo}
        />
      </Box>
    </Flex>
  );
}

export default Wifi;
