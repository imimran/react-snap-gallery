import React, { useEffect, useState } from "react";
import Axios from "axios";
import { apiBaseUrl } from "../config/apiConfig";
import "../screens/gallery.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Gallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    Axios.get(apiBaseUrl + "/api/v1/all-images?")
      .then((res) => {
        setLoading(true);
        setError(false);
        console.log("data", res.data.image_list);
        setData(res.data.image_list);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  const [model, setModel] = useState(false);
  const [temPicSrc, setTempPicSrc] = useState("");

  const getImg = (imageFullURL) => {
    console.warn(imageFullURL);
    setTempPicSrc(imageFullURL);
    setModel(true);
  };

  const deleteImage = (id) => {
    console.log("id", apiBaseUrl + `/api/v1/remove-image/${id}`);
    Axios.delete(apiBaseUrl + `/api/v1/remove-image/${id}`)
      .then((res) => {
        setModel(false);
        console.log(res);
        let newData = data.filter((e, i) => e._id !== id)
        setData(newData)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={temPicSrc.imageFullURL} alt="" />
        <HighlightOffIcon className='leftItem' onClick={() => setModel(false)} />
        <DeleteForeverIcon  className='rightItem'  onClick={()=> deleteImage(temPicSrc._id)}/>
        
      </div>
      <div className="gallery">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Server Error...</h1>
        ) : (
          data.map((image, i) => {
            return (
              <div
                className="pics"
                key={i}
                onClick={() => getImg(image)}
              >
                <img
                  src={image.imageFullURL}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Gallery;
