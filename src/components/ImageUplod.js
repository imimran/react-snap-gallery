import React, {useEffect, useState} from 'react'
import Dropzone from 'react-dropzone'
import Axios from 'axios'
import {apiBaseUrl} from '../config/apiConfig'
import { useHistory } from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function ImageUplod() {

    const [fileError, setFileError] = useState(false);
    let history = useHistory();

    const onDrop = (acceptedFiles) => {
 
        let data = new FormData();
        data.append('image', acceptedFiles[0]);
        console.log(acceptedFiles[0].type );
    
    //     if (acceptedFiles[0].type != 'text/csv') {
    //       setFileError(true);
    //       return false;
    //   } else {
    //     setFileError(false);
    //   }
    
    
        Axios.post(apiBaseUrl + '/api/v1/add-image', data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => {
            console.log(response);
            // history.push("/");
            
          })
          .catch((error) => {
            console.log(error);       
            
          });
    
    
      }

    return (
        <div>
             <Dropzone
            // accept={[".csv"]}
            onDrop={(acceptedFiles) => { onDrop(acceptedFiles)}}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}  className="dropzone">
                <input {...getInputProps()} />
                <CloudUploadIcon ></CloudUploadIcon>
                <button className="btn btn-primary">Upload</button>
                <br/>
                {/* {fileError && (
                                <div className="error-message" style={{color: "red"}}>
                                   Upload Only CSV file
                                </div>
                            )} */}
               
              </div>
            )}
          </Dropzone>
        </div>
    )
}

export default ImageUplod
