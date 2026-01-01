// src/components/YoutubeEmbed.jsx
import React from "react";

/**
 * YoutubeEmbed
 * ใช้สำหรับฝัง YouTube แบบ responsive (16:9)
 *
 * props:
 * - url: ลิงก์ YouTube แบบ youtu.be หรือ watch?v=
 * - videoId: ใส่ videoId ตรงๆ ก็ได้ (ถ้าใส่ videoId จะชนะ url)
 * - title: ชื่อสำหรับ iframe
 * - mode: "normal" | "background"
 * - height: ถ้าอยาก fix สูง (ใช้ตอน mode normal ได้) เช่น 360
 */
export default function YoutubeEmbed({
  url,
  videoId,
  title = "YouTube video",
  mode = "normal",
  height,
}) {
  const id = videoId || extractYouTubeId(url);

  if (!id) {
    return (
      <div
        style={{
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 10,
          fontSize: 14,
        }}
      >
        ใส่ <b>url</b> หรือ <b>videoId</b> ให้ถูกต้องก่อน
      </div>
    );
  }

  // normal: เล่นทั่วไป (มี controls ของ youtube ตามค่า default)
  const normalSrc = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;

  // background: autoplay + mute + loop + ปิดปุ่ม control
  // NOTE: loop ต้องใส่ playlist=id ด้วย
  const bgSrc = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&modestbranding=1&playsinline=1`;

  const src = mode === "background" ? bgSrc : normalSrc;

  // ถ้า user ใส่ height มา จะไม่ใช้ responsive wrapper
  if (height) {
    return (
      <iframe
        src={src}
        title={title}
        allow={
          mode === "background"
            ? "autoplay; encrypted-media; picture-in-picture; web-share"
            : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        }
        allowFullScreen
        style={{
          width: "100%",
          height,
          border: 0,
          borderRadius: 12,
        }}
      />
    );
  }

  // Responsive 16:9
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
      <iframe
        src={src}
        title={title}
        allow={
          mode === "background"
            ? "autoplay; encrypted-media; picture-in-picture; web-share"
            : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        }
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: 12,
        }}
      />
    </div>
  );
}

/**
 * รองรับ:
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - ลิงก์ที่มีพารามิเตอร์อื่น ๆ
 */
function extractYouTubeId(input) {
  if (!input || typeof input !== "string") return "";

  try {
    // ถ้าเป็นแค่ id ล้วน (11 ตัว) ก็คืนเลย
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    const u = new URL(input);

    // youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : "";
    }

    // youtube.com/watch?v=VIDEO_ID
    if (u.searchParams.get("v")) {
      const id = u.searchParams.get("v");
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : "";
    }

    // youtube.com/embed/VIDEO_ID
    if (u.pathname.includes("/embed/")) {
      const parts = u.pathname.split("/embed/");
      const id = parts[1]?.split("/")[0];
      return /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : "";
    }

    return "";
  } catch {
    return "";
  }
}
