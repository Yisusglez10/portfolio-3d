import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import "../styles.css";

const Tech = () => {
  return (
    <div className='carousel-container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {technologies.map((technology) => (
          <SwiperSlide key={technology.name}>
            <div className="carousel-item">
              <img src={technology.icon} alt={technology.name} className="carousel-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Tech, '');
