import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./style.module.css";
import { Container } from "@mantine/core";

function Header() {
  return (
    <div className={classes.header}>
      <Container size="xl">
        <div className={classes.flex}>
          <Image src={LogoImg} alt="trcik wise" />
          <ul>
            <li>
              <Link href="#">Desitnations</Link>
            </li>
            <li>
              <Link href="#">Hotels</Link>
            </li>
            <li>
              <Link href="#">Flights</Link>
            </li>
            <li>
              <Link href="#">Bookings</Link>
            </li>
            <li className={classes.btn}>
              <a href="tel:+998777774033">+998777774033</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
