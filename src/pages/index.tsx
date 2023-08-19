import Image from "next/image";
import { Feedback, Main, Partners, Sale, Service } from "@/container";

export default function Home() {
  return (
    <>
      <Main />
      <Service />
      <Sale />
      <Partners />
      <Feedback />
    </>
  );
}
