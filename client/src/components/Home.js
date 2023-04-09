import React from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const images = [
    { src: "./sample/b1.gif", alt: "w1" },
    { src: "./sample/b2.gif", alt: "w2" },
    { src: "./sample/b3.gif", alt: "w3" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, 4000);

  return (
    <Box sx={{ paddingTop: "55px", position: "relative", height: "100%" }}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={1000}
        selectedItem={activeSlide}
        onChange={setActiveSlide}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
