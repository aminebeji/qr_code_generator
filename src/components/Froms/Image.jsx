import { Box, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

import QROptions from "./QROptions";
import QrCode from "../Qr/QrCode";
import ImageUploader from "../items/ImageUpload";
function Image() {
  var states = {
    value: "",
  };
  const [state, setState] = useState(states);
  var [image, setImage] = useState("");
  var [Logo, setLogo] = useState(null);

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
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result;
        resolve(base64String);
      };

      reader.onerror = () => {
        reject(new Error("Error converting Blob to Base64"));
      };

      reader.readAsDataURL(blob);
    });
  }

  var uploadImage = (e) => {
    var imageUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imageUrl);
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        console.log("this is data = >", console.log(blob));
        return blobToBase64(blob)
          .then((base64String) => {
            console.log("Base64 encoded:", base64String);
            setState({ value: base64String });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
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
        <ImageUploader uploadImage={uploadImage} />

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

export default Image;
