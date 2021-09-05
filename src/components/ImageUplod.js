import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";
import { apiBaseUrl } from "../config/apiConfig";
import { Button } from "react-bootstrap";

function ImageUplod() {
  
  const onDrop = (acceptedFiles) => {
    let data = new FormData();
    data.append("image", acceptedFiles[0]);
    console.log(acceptedFiles[0].type);


    Axios.post(apiBaseUrl + "/api/v1/add-image", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Dropzone
        accept={[".jpeg,.jpg,.png,.gif"]}
        onDrop={(acceptedFiles) => {
          onDrop(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <Button variant="primary">Upload</Button>

            <br />
           
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default ImageUplod;
