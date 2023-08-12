import React from "react";
import Image from "next/image";
import Image1 from "@/assets/servise/Group 48.svg";
import Image2 from "@/assets/servise/Group 49.svg";
import Image3 from "@/assets/servise/Group 50.svg";
import Image4 from "@/assets/servise/Group 51.svg";
import classes from "./style.module.css";
import { Container } from "@mantine/core";

function Service() {
  return (
    <div className={classes.service}>
      <Container size="xl">
        <h5>CATEGORY</h5>
        <h2>We Offer Best Services</h2>

        <div className={classes.flex}>
          <div className={classes.card}>
            <Image src={Image1} alt="image" />
            <h5>Calculated Weather </h5>
            <p>
              Built Wicket longer <br /> admire do barton <br /> vanity itself
              do in it.
            </p>
          </div>
          <div className={classes.card}>
            <Image src={Image2} alt="image" />
            <h5>Calculated Weather </h5>
            <p>
              Built Wicket longer <br /> admire do barton <br /> vanity itself
              do in it.
            </p>
          </div>
          <div className={classes.card}>
            <Image src={Image3} alt="image" />
            <h5>Calculated Weather </h5>
            <p>
              Built Wicket longer <br /> admire do barton <br /> vanity itself
              do in it.
            </p>
          </div>
          <div className={classes.card}>
            <Image src={Image4} alt="image" />
            <h5>Calculated Weather </h5>
            <p>
              Built Wicket longer <br /> admire do barton <br /> vanity itself
              do in it.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service;
