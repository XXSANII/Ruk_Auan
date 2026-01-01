import { useNavigate } from "react-router-dom";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function VideoPage() {
  const navigate = useNavigate();

  // ลิงก์ YouTube ของคุณ
  const url = "https://youtu.be/6qT3UAJkqKo";

  return (
    <div className="page videoPage">
      <h1 className="title">ครบรอบ 4 เดือนแล้วน้าา🌟</h1>

      <div
        style={{
          width: 650,
          maxWidth: "90vw",
          borderRadius: 16,
          boxShadow: "0 14px 36px rgba(0,0,0,0.22)",
          overflow: "hidden", // ให้ขอบโค้งกับ iframe
        }}
      >
        {/* mode="normal" = เล่นแบบปกติ */}
        <YoutubeEmbed url={url} title="Luv video" mode="normal" />
      </div>

      <button className="linkBtn" onClick={() => navigate(-1)} style={{ marginTop: 16 }}>
        ← Back
      </button>
    </div>
  );
}
