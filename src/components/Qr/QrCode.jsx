import React, { useState } from "react";
import QRCode from "qrcode.react";
import { saveAs } from "file-saver";
import { Button, Input } from "@chakra-ui/react";

function QrCode({ value, fgColor, bgColor, logo }) {
  var [name, setName] = useState("file name");

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    canvas.toBlob(function (blob) {
      saveAs(blob, name + ".png");
    });
  };
  return (
    <div className="qr_container">
      <QRCode
        value={value}
        fgColor={fgColor}
        bgColor={bgColor}
        level={"H"}
        imageSettings={{
          src: logo,
          width : "60",
          height : "60",
          excavate : true
        }}
        className="qrcode"  
      />
      <Input className="filename_input" w={"40%"} value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handleDownload}>Download Qr Code</Button>
    </div>
  );
}

export default QrCode;
