import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ImageSwipe() {
  const images = [
    "https://picsum.photos/id/1018/900/600",
    "https://picsum.photos/id/1025/900/600",
    "https://picsum.photos/id/1035/900/600",
  ];

  return (
    <div style={{ width: "100%", maxWidth: 720, margin: "0 auto" }}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={12}
        slidesPerView={1}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              style={{
                width: "100%",
                height: 380,
                objectFit: "cover",
                borderRadius: 16,
              }}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
