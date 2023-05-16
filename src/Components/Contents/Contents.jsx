import { Link } from "react-router-dom";
import img from "./Macbook Pro.png";
import img2 from "./Boards Notifications.png";
import "./style.css";

export function Contents() {
  return (
    <header className="Contents">
      <div className="container">
        <div className="Contents__text">
          <h1>Contents</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="Contents__cards">
          <div className="Contents__Fcard">
            <h1>Work</h1>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <Link to={"/"}>
              <button>Sign Up</button>
            </Link>
            <img className="im" src={img} alt="" />
          </div>
          <div className="Contents__Fcard">
            <div className="Contents__link">
              <h3>NEW</h3>
            </div>
            <h1>Design with real data</h1>
            <p>
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify .
            </p>
            <Link to={"/"}>
              <button>Try For Free</button>
            </Link>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
