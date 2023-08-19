import Image from "next/image";
import {
  Feedback,
  Footer,
  Header,
  Main,
  Partners,
  Sale,
  Service,
} from "@/container";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Service />
      <Sale />
      <Partners />
      <Feedback />
      <Footer />
    </>
  );
}
