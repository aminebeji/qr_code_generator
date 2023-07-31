import React from "react";
import {
  Box,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
} from "@chakra-ui/react";
import { ChromePicker } from "react-color";

const ColorPickerWithButton = ({ color, onChange, title }) => {
  const handleColorChange = (newColor) => {
    onChange(newColor.hex);
  };

  const handleInputChange = (event) => {
    const newColor = event.target.value;
    onChange(newColor);
  };

  return (
    <Box w={"100%"} mt="3">
      <h1>{title}</h1>
      <Flex w={"100%"} gap={"5"} mt={"2"} align={"center"} justify={"center"}>
        <Box w={"100%"}>
          <Input value={color} onChange={handleInputChange} />
        </Box>
        <Popover>
          <PopoverTrigger>
            <Button w="100px" h="40px" borderRadius="md" bgColor={color} />
          </PopoverTrigger>
          <PopoverContent w="fit-content" p="4">
            <ChromePicker color={color} onChange={handleColorChange} />
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

export default ColorPickerWithButton;
