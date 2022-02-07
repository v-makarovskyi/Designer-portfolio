import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'

import "./intro.scss";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 2500,
      backSpeed: 60,
      showCursor: true,
      strings: [
        "FRONTEND разработка",
        "SMM продвижение",
        "Продающие тексты",
        "Дизайн приложений",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <Zoom><div className="imageContainer">
          <img src="assets/man-4.png" alt="" />
        </div></Zoom>
      </div>
      <div className="right">
        <div className="wrapper">
          <Fade right><h1>Алекс Корнеев</h1></Fade>
          <Zoom><h3>
            Freelance <span ref={textRef}></span>
          </h3></Zoom>
        </div>
        <a href="#portfolio">
          <img src="assets/down2.png" alt="" />
        </a>
      </div>
    </div>
  );
};
