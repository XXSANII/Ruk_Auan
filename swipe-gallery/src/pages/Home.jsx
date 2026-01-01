import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeckSwipe from "../components/DeckSwipe";
import EnvelopeLetter from "../components/EnvelopeLetter";

export default function Home() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page">
      <h1 className={`reveal d1 ${show ? "show" : ""}`}>ดีจ้าา น้องเนม</h1>

      <div className={`reveal d2 ${show ? "show" : ""}`}>
        <EnvelopeLetter onOpenNotes={() => navigate("/notes")} />
      </div>

      {/* <div className={`reveal d3 ${show ? "show" : ""}`}>
        <DeckSwipe />
      </div> */}

      <div className={`reveal d4 ${show ? "show" : ""}`}>
        {/* component อื่น ๆ */}
      </div>
    </div>
  );
}
