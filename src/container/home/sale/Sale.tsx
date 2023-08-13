import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import IconNavigation from "@/assets/navigation.png";
import Img1 from "@/assets/sale.png";

function Sale() {
  return (
    <div className={classes.service}>
      <Container size="xl">
        <h5>Top Selling</h5>
        <h2>Top Destinations</h2>

        <div className={classes.flex}>
          <div className={classes.card}>
            <Image src={Img1} alt="image"/>
            <div className={classes.box}>
              <div className={classes.text}>
                <h4>Rome, Italty</h4>
                <p>$5,42k</p>
              </div>
              <h6>
                <Image src={IconNavigation} alt="navigation" />
                10 Days Trip
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <Image src={Img1} alt="image"/>
            <div className={classes.box}>
              <div className={classes.text}>
                <h4>Rome, Italty</h4>
                <p>$5,42k</p>
              </div>
              <h6>
                <Image src={IconNavigation} alt="navigation" />
                10 Days Trip
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <Image src={Img1} alt="image"/>
            <div className={classes.box}>
              <div className={classes.text}>
                <h4>Rome, Italty</h4>
                <p>$5,42k</p>
              </div>
              <h6>
                <Image src={IconNavigation} alt="navigation" />
                10 Days Trip
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <Image src={Img1} alt="image"/>
            <div className={classes.box}>
              <div className={classes.text}>
                <h4>Rome, Italty</h4>
                <p>$5,42k</p>
              </div>
              <h6>
                <Image src={IconNavigation} alt="navigation" />
                10 Days Trip
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sale;
