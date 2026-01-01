import { useNavigate } from "react-router-dom";
import DeckSwipe from "../components/DeckSwipe";

export default function DeckPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button className="linkBtn" onClick={() => navigate("/")}>← กลับหน้า Home</button>
      <DeckSwipe />
    </div>
  );
}
