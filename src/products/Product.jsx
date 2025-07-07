import React from 'react';
import './product.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Product = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta ishga tushadi
    threshold: 0.3,    // 30% ko‘rinib qolganda ishga tushadi
  });

  return (
    <div className='product-container'>
      <div className="product-title">
        <h1>Курсы, которые у нас есть</h1>
        <p>
          НЕЙРОСОНОГРАФИЯ
         <br />
          ВЗРОСЛАЯ ЭХОКАРДИОГРАФИЯ
         <br />
          ДЕТСКАЯ ЭХОКАРДИОГРАФИЯ
         <br />
          АКУШЕРСТВО И ГИНЕКОЛОГИЯ
         <br />
          ФЕТАЛЬНАЯ ЭХОКАРДИОГРАФИЯ
        </p>
      </div>

      <div className="product-number" ref={ref}>
        <div className="product-top">
          <h1>Biz raqamlardamiz</h1>
        </div>
        <div className="product-bottom">
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={4} duration={1} /> // 1 sekundda
              )}
              +
            </h2>
            <p>Brendlar</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={10} duration={1.5} /> // 1.5 sekundda
              )}
              +
            </h2>
            <p>Dilerlar</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={60} duration={2} /> // 2 sekundda
              )}
              +
            </h2>
            <p>Xodimlar</p>
          </div>
          <div className="numbers">
            <h2>
              {inView && (
                <CountUp start={0} end={1000} duration={3} separator="," /> // 3 sekundda, vergul bilan
              )}
              +
            </h2>
            <p>Mijozlar</p>
          </div>
          <div className="numbers">
            <img width={180} src="https://www.assitech.uz/assets/raketa1-Ozrn9erW.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
