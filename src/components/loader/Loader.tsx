import Image from "next/image";
import React from "react";
import LoaderImage from "./loader.png";
import classes from "./style.module.css";

function Loader() {
  return (
    <div className={classes.loader__container}>
      <Image className={classes.loader} width={100} height={100} src={LoaderImage} alt="Lоader" />
    </div>
  );
}

export default Loader;
