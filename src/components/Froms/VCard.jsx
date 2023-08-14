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
function VCard() {
  var states = {
    values: {},
    isFNError: false,
    isPasswordError: false,
    value: "",
  };
  const [state, setState] = useState(states);
  var [Logo, setLogo] = useState(null);
  const handleInputChange = (e) => {
    var newValue = { ...state.values, [e.target.name]: e.target.value };
    var qrValue = "BEGIN:VCARD\nVERSION:3.0\n";
    for (var item in newValue) {
      var type =
        item == "EMAIL"
          ? ";type=WORK,INTERNET;CHARSET=UTF-8"
          : item == "URL"
          ? ";type=WORK;CHARSET=UTF-8"
          : ";CHARSET=UTF-8";
      qrValue += `${item};CHARSET=UTF-8:${newValue[item]}\n`;
    }
    qrValue += "END:VCARD";
    setState({
      ...state,
      values: { ...state.values, [e.target.name]: e.target.value },
      value: qrValue,
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
        <FormControl isInvalid={state.isFNError}>
          <FormLabel>Name</FormLabel>
          <Input
            name="FN"
            type="text"
            value={state.values.FN}
            onChange={handleInputChange}
          />
          {!state.isFNError ? (
            <FormHelperText>Enter the Name</FormHelperText>
          ) : (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={state.isFNError}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="TEL"
            type="text"
            value={state.values.TEL}
            onChange={handleInputChange}
          />
          {!state.isFNError ? (
            <FormHelperText>Enter the Phone Number</FormHelperText>
          ) : (
            <FormErrorMessage>Phone Number is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={state.isFNError}>
          <FormLabel>Email</FormLabel>
          <Input
            name="EMAIL"
            type="text"
            value={state.values.EMAIL}
            onChange={handleInputChange}
          />
          {!state.isFNError ? (
            <FormHelperText>Enter the Email</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={state.isFNError}>
          <FormLabel>Address</FormLabel>
          <Input
            name="ADR"
            type="text"
            value={state.values.ADR}
            onChange={handleInputChange}
          />
          {!state.isFNError ? (
            <FormHelperText>Enter the Address</FormHelperText>
          ) : (
            <FormErrorMessage>Address is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={state.isFNError}>
          <FormLabel>URL</FormLabel>
          <Input
            name="URL"
            type="text"
            value={state.values.URL}
            onChange={handleInputChange}
          />
          {!state.isFNError ? (
            <FormHelperText>Enter the URL</FormHelperText>
          ) : (
            <FormErrorMessage>URL is required.</FormErrorMessage>
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

export default VCard;
