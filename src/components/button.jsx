import { useNavigate } from "react-router-dom";
import './styles/button.css';

export default function Button({ title, path }) {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate(path)}>
      {title}
    </button>
  );
}
