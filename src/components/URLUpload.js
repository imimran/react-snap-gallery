import React, {useState} from 'react'
import Axios from 'axios'
import {apiBaseUrl} from '../config/apiConfig'
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function URLUpload() {

  const [imageFullURL, setImageFullURL] = useState("");
    let history = useHistory();

    const {
      register, formState: { errors }, handleSubmit 
    } = useForm();

    const HandleURLSubmit = (values) => {
      console.log('values', values);
     
      const userData = new FormData();
  
      userData.append("imageFullURL", values.imageFullURL ? values.imageFullURL : "");
 
  
      Axios.post(apiBaseUrl + "/api/v1/add-image-url", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response);
          
        })
        .catch((error) => {
        //   if(error && error.response && error.response.data && error.response.data.msg) {
        //     alert.error(error.response.data.msg)
        // }
          console.log(error);
        });
    };

    return (
        <div>
          <Form
      
      onSubmit={handleSubmit(HandleURLSubmit)}
      >
      <Form.Group controlId="message">
        <Form.Control
          type="text"
          placeholder="Image Link..."
          defaultValue={imageFullURL}
          onChange={(e) => setImageFullURL(e.target.value)}
          className={errors.imageFullURL && "is-invalid"}
          {...register("imageFullURL", {
            required: true,

          })}
        />
          {errors.first_name && (
            <span className="text-danger">
              {errors.first_name.type === "required" && "Please give imageFullURL"}
            </span>
          )}
       
      </Form.Group>  

      <br />
      <Button type="submit" variant="primary">
        Add Image
      </Button>
      </Form>
        </div>
    )
}

export default URLUpload
