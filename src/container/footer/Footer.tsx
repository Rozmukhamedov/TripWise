import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import classes from "./style.module.css";
import { Container, Grid } from "@mantine/core";

function Footer() {
  return (
    <div className={classes.footer}>
      <Container size="xl">
        <div className={classes.flex}>
          <div className={classes.first}>
            <Image src={Logo} alt="Trip Wise" />
            <p>
              Book your trip in minute, get full <br /> Control for much longer.
            </p>
          </div>
          <div className="company">
            <h3>Company</h3>
            <h5>
              <Link href="#">About</Link>
            </h5>
            <h5>
              <Link href="#">Careers</Link>
            </h5>
            <h5>
              <Link href="#">Mobile</Link>
            </h5>
          </div>
          <div>
            <h3>Social Networks</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
