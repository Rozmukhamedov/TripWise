import React, { useState } from "react";
import classes from "./style.module.css";
import Image1 from "@/assets/feedback/image.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Container } from "@mantine/core";
import { Button, Input } from "@/components";

function Feedback() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onChange = (e: any) => {
    e.preventDefault();

    console.log(name);

    let templateParams = {
      name: name,
      email: email,
    };
    console.log(name);
    emailjs
      .send(
        "service_4ewopve",
        "template_7pqos4u",
        templateParams,
        "4D-MQCb1g9eE3gkgb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <Container size={"xl"}>
      <div className={classes.feedback} id="feedback">
        <Image src={Image1} alt="image" />
        <h4>
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h4>

        <form className={classes.form} onSubmit={onChange}>
          <Input
            type="text"
            name="name"
            onChange={setName}
            placeholder={"Your Name"}
          />
          <Input
            type="email"
            name="email"
            onChange={setEmail}
            placeholder={"Your Email"}
          />
          <Button type="submit">Отправить</Button>
        </form>
      </div>
    </Container>
  );
}

export default Feedback;
