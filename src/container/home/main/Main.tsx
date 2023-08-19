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
          <h5>ЛУЧШИЕ НАПРАВЛЕНИЯ ПО ВСЕМУ МИРУ</h5>
          <h3>
            Путешествуйте, наслаждайтесь <br />
            и жить по-новому
            <br />и полная жизнь
          </h3>
          <p>
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br />
            sell they west hard for the.
          </p>
          <div className={classes.btns}>
            <Button type="button">
              <a href="tel:+998777774033">Узнать больше</a>
            </Button>
          </div>
        </div>
        <Image src={UserImage} alt="main" width={700} height={600} />
      </div>
    </Container>
  );
}

export default Main;
