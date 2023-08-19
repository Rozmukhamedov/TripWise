import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import { Container, Grid } from "@mantine/core";
import IconNavigation from "@/assets/navigation.png";
import Img1 from "@/assets/tour/maldives.jpg";
import Img2 from "@/assets/tour/georgia.jpg";
import Img3 from "@/assets/tour/egypt.jpg";
import Img4 from "@/assets/tour/vietnam.jpg";

function Sale() {
  return (
    <div className={classes.service} id="destination">
      <Container size="xl">
        <h5>Лучшие продажи</h5>
        <h2>Популярные направления</h2>

        <div className={classes.flex}>
          <Grid>
            <Grid.Col md={6} lg={3}>
              <div className={classes.card}>
                <Image src={Img1} alt="image" />
                <div className={classes.box}>
                  <div className={classes.text}>
                    <h4>Мальдивы</h4>
                    <p>$1300</p>
                  </div>
                  <h6>
                    <Image src={IconNavigation} alt="navigation" />7 Дневная
                    поездка
                  </h6>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className={classes.card}>
                <Image src={Img2} alt="image" />
                <div className={classes.box}>
                  <div className={classes.text}>
                    <h4>Грузия</h4>
                    <p>$540</p>
                  </div>
                  <h6>
                    <Image src={IconNavigation} alt="navigation" />7 Дневная
                    поездка
                  </h6>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className={classes.card}>
                <Image src={Img3} alt="image" />
                <div className={classes.box}>
                  <div className={classes.text}>
                    <h4>Египет</h4>
                    <p>$699</p>
                  </div>
                  <h6>
                    <Image src={IconNavigation} alt="navigation" />7 Дневная
                    поездка
                  </h6>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className={classes.card}>
                <Image src={Img4} alt="image" />
                <div className={classes.box}>
                  <div className={classes.text}>
                    <h4>Вьетнам</h4>
                    <p>$899</p>
                  </div>
                  <h6>
                    <Image src={IconNavigation} alt="navigation" />7 Дневная
                    поездка
                  </h6>
                </div>
              </div>
            </Grid.Col>
            {/* <Grid.Col md={6} lg={3}>
              <div className={classes.card}>
                <Image src={Img1} alt="image" />
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
            </Grid.Col> */}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Sale;
