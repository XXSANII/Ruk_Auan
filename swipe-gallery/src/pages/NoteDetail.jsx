import { useParams, Link } from "react-router-dom";

const notes = [
  { id: "1", title: "ถึงตัวฉันในอนาคต", body: "สวัสดี… อย่าลืมพักผ่อนนะ 💗" },
  { id: "2", title: "สิ่งที่อยากทำปีนี้", body: "1) ทำโปรเจกต์ให้เสร็จ 2) ดูแลตัวเอง" },
  { id: "3", title: "โน้ตสั้น ๆ", body: "วันนี้เก่งมากแล้ว" },
];

export default function NoteDetail() {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) return <div className="page">ไม่พบโน้ต</div>;

  return (
    <div className="page">
      <h1 className="title">{note.title}</h1>
      <div className="paper">
        {note.body}
      </div>
      <Link className="linkBtn" to="/">← กลับหน้า Home</Link>
    </div>
  );
}
