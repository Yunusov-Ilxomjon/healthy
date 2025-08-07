import React from 'react';
import './servise.css';
import { useTranslation } from 'react-i18next';

const Servise = () => {
  const { t } = useTranslation();

  return (
    <div id="service" className='servise-container'>
      <div data-aos="fade-right" className="servise-info-1">
        <h1>
          {t("servise.deliver")}{" "}
          <span>{t("servise.directly_from_manufacturer")}</span>
        </h1>
        <img
          width={300}
          src="./servise-img/aparat1.png"
          alt=""
        />
      </div>
      <div data-aos="fade-left" className="servise-info-2">
        <img
          width={300}
          src="./servise-img/aparat2.png"
          alt=""
        />
        <h1>
          {t("servise.solve")}{" "}
          <span>{t("servise.complex_equipment_tasks")}</span>
        </h1>
      </div>
    </div>
  );
};

export default Servise;
