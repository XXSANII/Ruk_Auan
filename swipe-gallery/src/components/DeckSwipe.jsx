import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function DeckSwipe() {
  const images = [
    "../src/assets/img/photo.PNG",
    "../src/assets/img/IMG_6230.JPG",
    "../src/assets/img/flower.JPG",
    "../src/assets/img/glass.JPG",
    "../src/assets/img/p1.JPG",
  ];

  return (
    <div style={{ width: 320, height: 460 }}>
      <Swiper
        effect="cards"
        grabCursor
        modules={[EffectCards]}
        style={{ width: "100%", height: "100%" }}
      >
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
