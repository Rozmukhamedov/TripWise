import React from "react";
import classes from "./style.module.css";
import Image1 from "@/assets/feedback/image.png";
import Image from "next/image";
import { Container } from "@mantine/core";

function Feedback() {
  return (
    <Container size={"xl"}>
      <div className={classes.feedback}>
        <Image src={Image1} alt="image" />
        <h4>
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h4>
      </div>
    </Container>
  );
}

export default Feedback;
