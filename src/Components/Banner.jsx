import Slider from "./Slider/Slider";
import "./Slider/SliderData";
import slides from "./Slider/SliderData.json";

import "swiper/css";

const Banner = () => {
  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default Banner;
