import { Link } from "react-router-dom";
import "./styles/navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
