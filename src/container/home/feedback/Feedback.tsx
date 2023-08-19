import React from "react";
import classes from "./style.module.css";
import Image1 from "@/assets/feedback/image.png";
import Image from "next/image";
import { Container } from "@mantine/core";
import { Button, Input } from "@/components";

function Feedback() {
  return (
    <Container size={"xl"}>
      <div className={classes.feedback} id="feedback">
        <Image src={Image1} alt="image" />
        <h4>
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h4>

        <form className={classes.form}>
          <Input
            type="text"
            name="name"
            onChange={(e) => console.log(e)}
            placeholder={"Your Name"}
          />
          <Input
            type="email"
            name="email"
            onChange={(e) => console.log(e)}
            placeholder={"Your Email"}
          />
          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </Container>
  );
}

export default Feedback;
