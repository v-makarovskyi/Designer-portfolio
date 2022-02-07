import React from "react";
import "./works.scss";
import Zoom from "react-reveal/Zoom";
import { dataWorks } from "../../data";

export const Works = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setActiveSlide(activeSlide > 0 ? activeSlide - 1 : 2)
      : setActiveSlide(
          activeSlide < dataWorks.length - 1 ? activeSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        {dataWorks.map((d) => (
          <Zoom>
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href="#portfolio">
                      <span>Проекты</span>
                    </a>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="#" />
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
      <img
        src="assets/arrow1.png"
        className="arrow left"
        alt="#"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow1.png"
        className="arrow right"
        alt="#"
        onClick={() => handleClick()}
      />
    </div>
  );
};
