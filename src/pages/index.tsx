import Image from "next/image";
import { Feedback, Main, Sale, Service } from "@/container";

export default function Home() {
  return (
    <>
      <Main />
      <Service />
      <Sale />
      <Feedback />
    </>
  );
}
