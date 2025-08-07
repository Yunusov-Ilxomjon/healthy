import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div id="about" data-aos="fade-up" className="about-container">
      <h1 className="title">{t('about.title')}</h1>
      <div className="about-cards">
        <div className="about-info">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
        </div>
        <div className="about-info">
          <p>{t('about.paragraph3')}</p>
          <p>{t('about.paragraph4')}</p>
          <p>{t('about.paragraph5')}</p>
          <p>{t('about.paragraph6')}</p>
        </div>
        <div className="about-info-img">
          <img width={400} src="/nav-logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
