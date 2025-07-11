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
              <img src="https://www.assitech.uz/assets/services-COB4XtZd.jpg" alt="client1" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/services2-K8QYSDe8.jpg" alt="client2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/services3-BSCkrwvh.jpg" alt="client3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/services4-D49m1GA5.jpg" alt="client4" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/services4-D49m1GA5.jpg" alt="client5" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/servies6-Czu_XXJd.jpg" alt="client6" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img src="https://www.assitech.uz/assets/services7-DO5HLDSf.jpg" alt="client7" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
