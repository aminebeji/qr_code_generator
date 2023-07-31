import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import ColorPickerWithButton from "../items/ColorPicker";
import FileUploader from "../items/Uploader";
function QROptions({ colors, updateColor, changeLogo , logo }) {
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem className="accordion_button">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h1 className="Accordion_title">Colors</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ColorPickerWithButton
            color={colors.bgColor}
            title="Background color"
            onChange={(e) => {
              updateColor("bg", e);
            }}
          />
          <ColorPickerWithButton
            color={colors.edgeColor}
            title="Edges color"
            onChange={(e) => {
              updateColor("fg", e);
            }}
          />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="accordion_button">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h1 className="Accordion_title">Logo</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <FileUploader
          logo={logo}
            changeLogo={(e) => {
              changeLogo(e);
            }}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default QROptions;
