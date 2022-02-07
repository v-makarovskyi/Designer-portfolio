import "./topbar.scss";
import { AlternateEmail, LocalPhone } from '@material-ui/icons';


export const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">AlexDesign</a>
          <div className="itemContainer">
            <LocalPhone className="icon"/>
            <span>+38 050 555 44 77</span>
          </div>
          <div className="itemContainer">
            <AlternateEmail className="icon"/>
            <span>info@alexdesign.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
};
