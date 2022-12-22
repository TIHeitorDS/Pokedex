import React, { useEffect, useState } from "react";
import "./style.css";

const Preloader = () => {
  const [preloader, setPreloader] = useState("preloader");

  useEffect(() => {
    setTimeout(() => {
        setPreloader('none')
    }, 3000)
  }, [])

  return <div id={preloader}></div>;
};

export default Preloader;
