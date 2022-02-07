import { useEffect, useState } from "react";
import "./portfolio.scss";
import Zoom from 'react-reveal/Zoom';
import { PortfolioList } from "../portfolioList/PortfolioList";
import {
  corpPortfolio,
  storePortfolio,
  landingPortfolio,
  catPortfolio,
  logoPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);

  const list = [
    {
      id: "corp",
      title: "Корпоративные сайты",
    },
    {
      id: "store",
      title: "Интернет-магазины",
    },
    {
      id: "landing",
      title: "Landing Page",
    },
    {
      id: "cat",
      title: "Сайты-каталоги",
    },
    {
      id: "logo",
      title: "Логотипы",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "corp":
        setData(corpPortfolio);
        break;

      case "store":
        setData(storePortfolio);
        break;

      case "landing":
        setData(landingPortfolio);
        break;

      case "cat":
        setData(catPortfolio);
        break;

      case "logo":
        setData(logoPortfolio);
        break;
      default:
        setData(corpPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <Zoom><h1>ПОРТФОЛИО</h1></Zoom>
      <ul>
        {list.map((item) => (
          <Zoom><PortfolioList
            title={item.title}
            setSelected={setSelected}
            active={selected === item.id}
            id={item.id}
            key={item.id}
          /></Zoom>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <Zoom><div className="item" key={d.id}>
            <img
              src={d.img}
              alt="#"
            />
            <h3>{d.title}</h3>
            <a href={d.url} target="_blank" rel="noreferrer">{d.subtitle}</a>
          </div></Zoom>
        ))}
      </div>
    </div>
  );
};
