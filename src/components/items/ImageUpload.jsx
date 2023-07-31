import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const ImageUploader = ({ uploadImage }) => {
  var [file, setFile] = useState(null);
  return (
    <>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Upload your image
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          onChange={(e) => {
            uploadImage(e);
            setFile(e.target.files[0].filename);
          }}
          value={file}
        />
      </div>
      <Button
        onClick={() => {
          setFile(null);
          uploadImage(null);
        }}
      >
        Remove Image
      </Button>
    </>
  );
};

export default ImageUploader;
