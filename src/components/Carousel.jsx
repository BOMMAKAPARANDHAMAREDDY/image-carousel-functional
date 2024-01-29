import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const prev = () => {
    if (currImageIndex > 0) {
      setCurrImageIndex(currImageIndex - 1);
    } else {
      setCurrImageIndex(images.length - 1);
    }
  };

  const next = () => {
    if (currImageIndex < images.length - 1) {
      setCurrImageIndex(currImageIndex + 1);
    } else {
      setCurrImageIndex(0);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className="btnContainer">
          <div className="leftBtn" onClick={prev}>
            <ArrowBackIosIcon style={{ fill: "white" }} />
          </div>
          <div className="rightBtn" onClick={next}>
            <ArrowForwardIosIcon style={{ fill: "white" }} />
          </div>
        </div>
        <div className="imageSpanContainer">
          <span className="text title">{images[currImageIndex].title}</span>
          <img src={images[currImageIndex].img} alt={images[currImageIndex].title} />
          <span className="text subtitle">{images[currImageIndex].subtitle}</span>
        </div>
      </div>
    </>
  );

}

export default Carousel;