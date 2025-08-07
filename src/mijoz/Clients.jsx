import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './clients.css';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className='client-container'>
      <div className="client-title">
        <h1>
          {t('clients.title')}
          <br />
          <h2>
            {t('clients.subtitle')}
          </h2>
        </h1>
      </div>

      <div className="client-cards">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/1.jpg" alt="client1" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/2.jpg" alt="client2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/3.jpg" alt="client3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/4.jpg" alt="client4" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/5.jpg" alt="client5" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/6.jpg" alt="client6" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="./clients-img/7.jpg" alt="client7" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
