import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import DeckSwipe from "../components/DeckSwipe";

export default function Notes() {
  const CODE = "050968";
  const navigate = useNavigate();
  const [digits, setDigits] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    if (digits.join("") === CODE) {
      navigate("/video");
    }
  }, [digits, navigate]);

  const handleChange = (idx, value) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[idx] = sanitized;
      return next;
    });
    if (sanitized && idx < inputsRef.current.length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="page noteLayout">
      <div className="noteLeft">
        <div className="deckStage">
          <DeckSwipe />
        </div>
      </div>

      <div className="noteRight">
        <h1 className="title">Love U 3000</h1>
        <p className="hint">hint : วันครบรอบ</p>
        <div className="codeRow">
          {digits.map((digit, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="codeBox"
            />
          ))}
        </div>
        <Link className="font-lg" to="/">🏡Name</Link>
      </div>
    </div>
  );
}
