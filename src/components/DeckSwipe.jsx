import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import photo from "../assets/img/photo.PNG";
import img6230 from "../assets/img/IMG_6230.JPG";
import flower from "../assets/img/flower.JPG";
import glass from "../assets/img/glass.JPG";
import p1 from "../assets/img/p1.JPG";

export default function DeckSwipe() {
  const images = [photo, img6230, flower, glass, p1];

  return (
    <div style={{ width: 320, height: 460 }}>
      <Swiper effect="cards" grabCursor modules={[EffectCards]} style={{ width: "100%", height: "100%" }}>
        {images.map((src, i) => (
          <SwiperSlide key={i} style={{ borderRadius: 18, overflow: "hidden" }}>
            <img
              src={src}
              alt={`card-${i}`}
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
