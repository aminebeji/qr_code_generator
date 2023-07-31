import React, { useState } from "react";
import {   Button } from "@chakra-ui/react";

const FileUploader = ({ changeLogo }) => {
  var [file, setFile] = useState(null);
  return (
    <>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Upload logo image
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          onChange={(e) => {
            changeLogo(e);
            setFile(e.target.files[0].filename);
          }}
          value={file}
        />
      </div>
      <Button
        onClick={() => {
          setFile(null)
          changeLogo(null);
        }}
      >
        Remove Logo
      </Button>
    </>
  );
};

export default FileUploader;
