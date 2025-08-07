import React from 'react';
import './product.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div id="product" className='product-container'>
      <div className="product-title">
        <h1>{t('product.title')}</h1>
        <p>
          {t('product.course1')}
          <br />
          {t('product.course2')}
          <br />
          {t('product.course3')}
          <br />
          {t('product.course4')}
          <br />
          {t('product.course5')}
        </p>
      </div>

      <div className="product-number" ref={ref}>
        <div className="product-top">
          <h1>{t('product.numbersTitle')}</h1>
        </div>
        <div className="product-bottom">
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={4} duration={1} />
              )}
              +
            </h2>
            <p>{t('product.brands')}</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={10} duration={1.5} />
              )}
              +
            </h2>
            <p>{t('product.dealers')}</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={60} duration={2} />
              )}
              +
            </h2>
            <p>{t('product.employees')}</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={1000} duration={3} separator="," />
              )}
              +
            </h2>
            <p>{t('product.clients')}</p>
          </div>
          <div className="numbers">
            <img width={180} src="./product-img/raketa.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
