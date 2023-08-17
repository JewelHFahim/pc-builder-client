import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function HeaderSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[80vh] relative">
            <Image src="/SL1.jpg" alt="" fill={true} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80vh] relative">
            <Image src="/SL2.jpg" alt="" fill={true} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80vh] relative">
            <Image src="/SL3.jpg" alt="" fill={true} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
