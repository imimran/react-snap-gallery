import React, { useState } from "react";
import Axios from "axios";
import { apiBaseUrl } from "../config/apiConfig";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function URLUpload() {
  const [imageFullURL, setImageFullURL] = useState("");


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const HandleURLSubmit = (values) => {
    console.log("values", values);

    const userData = new FormData();

    userData.append(
      "imageFullURL",
      values.imageFullURL ? values.imageFullURL : ""
    );

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
      <Form onSubmit={handleSubmit(HandleURLSubmit)}>
        <Row className="align-items-center">
          <div className="col-8" >
            <Form.Group controlId="message">
              <Form.Control
                type="url"
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
                  {errors.first_name.type === "required" &&
                    "Please give imageFullURL"}
                </span>
              )}
            </Form.Group>
          </div>

          <div className="col-4" >
            <button type="submit" className="btn btn-sm btn-primary">
              Add Image
            </button>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default URLUpload;
