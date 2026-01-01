export default function LetterModal({ open, onClose, notes, onOpenNote }) {
  if (!open) return null;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2>📨 จดหมายของคุณ</h2>
          <button className="closeBtn" onClick={onClose}>✕</button>
        </div>

        <div className="noteList">
          {notes.map((n) => (
            <button key={n.id} className="noteItem" onClick={() => onOpenNote(n.id)}>
              <div className="noteTitle">{n.title}</div>
              <div className="noteHint">แตะเพื่ออ่าน</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
