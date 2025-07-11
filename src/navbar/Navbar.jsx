import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import './navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [feedback, setFeedback] = useState({
    show: false,
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    if (name.trim() && phone.trim() && message.trim()) {
      setFeedback({
        show: true,
        message: t('nav.successMessage'),
        type: 'success'
      });
      setFormData({ name: '', phone: '', message: '' });
      setIsModalOpen(false);
    } else {
      setFeedback({
        show: true,
        message: t('nav.errorMessage'),
        type: 'error'
      });
    }

    setTimeout(() => {
      setFeedback({ show: false, message: '', type: '' });
    }, 3000);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
<ul>
  <li>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF size={20} />
    </a>
  </li>
  <li>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} />
    </a>
  </li>
  <li>
    <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane size={20} />
    </a>
  </li>
  <li>
    <a href="tel:+998901234567">+998 90 123 45 67</a>
  </li>
</ul>
     <button className='btn-nav' onClick={() => setIsModalOpen(true)}>
            {t('nav.contactButton')}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal">
            <form className='modal-form' onSubmit={handleSubmit}>
              <h1 style={{ textAlign: 'center', color: '#2E3A6B', fontSize: '26px', marginBottom: '40px' }}>
                {t('nav.modalTitle')}
              </h1>

              <label>{t('nav.labelName')} <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="name"
                placeholder={t('nav.placeholderName')}
                value={formData.name}
                onChange={handleChange}
              />

              <label>{t('nav.labelPhone')} <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="phone"
                placeholder={t('nav.placeholderPhone')}
                value={formData.phone}
                onChange={handleChange}
              />

              <label>{t('nav.labelMessage')} <span style={{ color: 'red' }}>*</span></label>
              <textarea
                name="message"
                placeholder={t('nav.placeholderMessage')}
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">{t('nav.submitButton')}</button>
            </form>
          </div>
        </>
      )}

      {feedback.show && (
        <div className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
    </>
  );
};

export default Navbar;
