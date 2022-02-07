import "./testimonials.scss";
import Roll from "react-reveal/Roll";
import { dataTestimonials } from "../../data";

export const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <Roll><h1>Отзывы заказчиков</h1></Roll>
      <div className="container">
        
          {dataTestimonials.map((d) => (
            <Roll><div className="card" key={d.id}>
              <div className="top">
                <img src={d.left} className="left" alt="" />
                <img src={d.user} alt="#" className="user" />
                <img src={d.right} alt="" className="right" />
              </div>
              <div className="center">{d.desc}</div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.work}</h4>
              </div>
            </div></Roll>
          ))}
        
      </div>
    </div>
  );
};
