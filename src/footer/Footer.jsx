import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer-container'>
      <div className="footer-content">
        <div className="footer-contact">
          <h1>{t('footer.contactTitle')}</h1>

          <h2>{t('footer.companyAddressTitle')}</h2>
          <h3>{t('footer.companyAddress')}</h3>

          <h2>{t('footer.phoneTitle')}</h2>
          <a href="tel:+998998159885">+998 99 815 98 85</a>

          <h2>{t('footer.mailTitle')}</h2>
          <ul>
            <li><a href="/">sales@assitech.uz</a></li>
            <li><a href="/">Ceo@assitech.uz</a></li>
            <li><a href="/">Sevinch@assitech.uz</a></li>
          </ul>

          <h2>{t('footer.workingHoursTitle')}</h2>
          <h3>{t('footer.workingHours')}</h3>

          <h2>{t('footer.socialTitle')}</h2>
          <ul style={{ marginTop: '20px' }}>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/nav-img/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer">
                <img src="/nav-img/telegram.png" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/nav-img/facebook.png" alt="facebook" />
              </a>
            </li>
          </ul>

          <p>{t('footer.copyright')}</p>
        </div>

        <div className="footer-map">
          <iframe
            title={t('footer.mapTitle')}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.858812123871!2d69.28604321567002!3d41.31108197927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b37019845ab%3A0x64db748f6be20a39!2z0KXQsNC80LjRgNCw0L3QvdGPINCg0LXRhdC90LjQutCw!5e0!3m2!1suz!2s!4v1700000000000!5m2!1suz!2s"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
