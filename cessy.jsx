import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./hero.css";
import Picture from "../assets/cessilia.png";

export default function Nav() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container">
      <div className="subContainer">
        <div className="textContainer">
          <p className="text1">Hi! I'm Princess Allanah</p>
          <p className="text2">An enthusiastic System Analyst</p>
          {/* About Button */}
          <button className="navButton" onClick={() => navigate("/about")}>
            About Me
          </button>
        </div>
      </div>
      <div className="subContainer">
        <img className="image" src={Picture} alt="Princess Allanah Ginon" />
      </div>
    </div>
  );
}
