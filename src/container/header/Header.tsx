import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./style.module.css";
import { Container } from "@mantine/core";

function Header() {
  return (
    <Container size="xl">
      <div className={classes.header}>
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
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Header;
