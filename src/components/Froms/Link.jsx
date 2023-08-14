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
function Link() {
  var states = {
    link: null,
    siLinkError: false,
    value: "",
  };
  const [state, setState] = useState(states);
  var [Logo, setLogo] = useState(null);
  const handleInputChange = (e) => {
    var newValue = "";
    setState({
      ...state,
      [e.target.name]: e.target.value,
      value: e.target.value,
    });

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
    <Flex className="main_qr_content">
      <Box
        w="57.5%"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        className="card_item"
      >
        <FormControl isInvalid={state.siLinkError}>
          <FormLabel>Your Link</FormLabel>
          <Input
            name="link"
            type="text"
            value={state.link}
            onChange={handleInputChange}
          />
          {!state.siLinkError ? (
            <FormHelperText>Enter Your Link</FormHelperText>
          ) : (
            <FormErrorMessage>Link is required.</FormErrorMessage>
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
        className="card_item"
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

export default Link;
