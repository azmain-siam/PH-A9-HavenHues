import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";

const Slider = ({ slides }) => {
  return (
    <div className="cursor-default">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.image}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="slider bg-cover bg-center bg-no-repeat w-full"
          >
            <div
              data-aos="fade-zoom-in"
              className="h-[300px] md:min-h-[calc(100vh-80px)]"
            >
              <div className="h-[300px] md:min-h-[calc(100vh-80px)] w-full bg-black bg-opacity-50 text-center flex flex-col justify-center items-center">
                <h3 className="text-white text-2xl md:text-6xl font-bold mb-3">
                  {slide.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-xs md:text-lg w-[75%] md:w-[700px]">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.array,
};
