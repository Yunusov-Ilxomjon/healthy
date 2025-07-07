import React, { useEffect } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-up" className="about-container">
      <h1 className="title">ASSI Tech</h1>
      <div className="about-cards">
        <div className="about-info">
          <p>
            Bizning ASSITECHBIO kompaniyamiz quyidagilarga ixtisoslashgan: ultratovush asboblarini sotish va xizmat ko'rsatish va ultratovush kurslarini tashkil etish.
          </p>
          <p>
            Biz turli ishlab chiqaruvchilar va narx toifalarining keng assortimentini taklif etamiz: mobil xizmatlar uchun ixcham portativ ultratovush apparatlaridan tortib, tibbiyot muassasalari uchun yuqori aniqlikdagi statsionar qurilmalargacha.
          </p>
        </div>
        <div className="about-info">
          <p>
            Biz ishonchli yetkazib beruvchilar bilan ishlaymiz va mahsulot sifatini kafolatlaymiz, shuningdek, ultratovushli qurilmalar uchun kafolat va kafolatdan keyingi xizmatni taqdim etamiz.
          </p>
          <p>
            Mutaxassislarimiz tibbiy asbob-uskunalar sohasida katta tajribaga ega va har doim kerakli asbob-uskunalarni tanlash va o'rnatishda yordam berishga tayyor.
          </p>
          <p>
            Maqsadimiz mijozlarni eng yaxshi ultratovush apparatlari bilan ta'minlash, ularning ishini optimallashtirish va bemorlarni tashxislash va davolash samaradorligini oshirishga yordam berishdir.
          </p>
          <p>
            Biz mijozlarimiz bilan uzoq muddatli munosabatlarga intilamiz, ularga faqat eng yaxshi uskunalar va xizmatlarni taklif qilamiz.
          </p>
        </div>
        <div className="about-info-img">
          <img src="/nav-logo.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
