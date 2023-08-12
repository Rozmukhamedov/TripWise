import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import { Button } from "@/components";
import UserImage from "@/assets/main/Image.png";
import { Container } from "@mantine/core";

function Main() {
  return (
    <Container size={"xl"}>
      <div className={`${classes.main} container mx-auto px-5`}>
        <div className={classes.texts}>
          <h5>Best Destinations around the world</h5>
          <h3>
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h3>
          <p>
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br />
            sell they west hard for the.
          </p>
          <div className={classes.btns}>
            <Button>Find out more</Button>
          </div>
        </div>
        <Image src={UserImage} alt="main" width={700} height={600}/>
      </div>
    </Container>
  );
}

export default Main;
