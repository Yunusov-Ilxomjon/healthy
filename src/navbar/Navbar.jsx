import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
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
        message: "✅ Ma'lumotingiz muvaffaqiyatli yetkazildi!",
        type: 'success'
      });
      setFormData({ name: '', phone: '', message: '' });
      setIsModalOpen(false);
    } else {
      setFeedback({
        show: true,
        message: "❌ Iltimos, barcha maydonlarni to‘ldiring!",
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
            <li><a href=""><img src="/nav-img/instagram.png" alt="instagram" /></a></li>
            <li><a href=""><img src="/nav-img/telegram.png" alt="telegram" /></a></li>
            <li><a href=""><img src="/nav-img/facebook.png" alt="facebook" /></a></li>
            <li><a href="tel:+998901234567">+998 90 123 45 67</a></li>
          </ul>
          <button className='btn-nav' onClick={() => setIsModalOpen(true)}>Aloqa</button>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal">
            <form className='modal-form' onSubmit={handleSubmit}>
              <h1 style={{textAlign: 'center', color: '#2E3A6B', fontSize: '26px', marginBottom: '40px'}}>Bizga qanday savolingiz bor?</h1>
              <label>Ism <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="name"
                placeholder='Ismingizni kiriting'
                value={formData.name}
                onChange={handleChange}
              />
              <label>Telefon raqami <span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="phone"
                placeholder='Telefon raqamingizni kiriting'
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Sizning habaringiz <span style={{ color: 'red' }}>*</span></label>
              <textarea
                name="message"
                placeholder='Sizning habaringiz'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Yuborish</button>
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
