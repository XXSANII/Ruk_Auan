import { useState } from "react";

export default function EnvelopeLetter({ onOpenNotes }) {
  // 0 = ปิด, 1 = เปิดฝา, 2 = กระดาษออกมา
  const [stage, setStage] = useState(0);

  const onEnvelopeClick = () => {
    setStage((s) => (s === 0 ? 1 : s === 1 ? 2 : 0)); // คลิกอีกทีวนกลับปิด (เอาออกได้ถ้าไม่อยากให้ปิดกลับ)
  };

  return (
    <div
      className={`envWrap ${stage >= 1 ? "is-flap-open" : ""} ${
        stage >= 2 ? "is-letter-out" : ""
      }`}
      onClick={onEnvelopeClick}
    >
      <div className="envelope">
        <div className="envBack" />
        <div className="envFront" />
        <div className="envFlap" />

        <button
          className="letter"
          onClick={(e) => {
            e.stopPropagation();
            if (stage >= 2) onOpenNotes?.();
          }}
          aria-label="Open notes"
        >
          <div className="letterTop" />
          <div className="letterBody">
            <div className="letterTitle">4 Months</div>
            <div className="letterHint">Ruk auan na 💕</div>
          </div>
        </button>
      </div>
    </div>
  );
}
