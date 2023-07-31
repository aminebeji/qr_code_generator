import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const customTheme = extendTheme({
  colors: {
    light: { lighterGray: "#EDF2F7" },
    dark: { lighterGray: "#2D3748" },
  },
});
root.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);
