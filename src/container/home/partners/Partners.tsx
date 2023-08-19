import React from "react";
import Slider from "react-slick";
import Img1 from "@/assets/partners/image 28.png";
import Image from "next/image";
import { Container } from "@mantine/core";
import classes from "./style.module.css"

function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className={classes.partners}>
      <Container size="xl">
        <Slider {...settings}>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
          <div>
            <Image src={Img1} alt="image" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Partners;
