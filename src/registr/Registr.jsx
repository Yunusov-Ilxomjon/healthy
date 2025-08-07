import React from 'react'
import './registr.css'

const Registr = () => {



    return (
        <div id="registr" className='registr-container'>
            <div className="registr-content">
                <div data-aos="fade-left" className="registr-info">
                    <h1 style={{ textAlign: 'center' }} >Контактная информация</h1>
                    <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '18px' }}>
                        Вы можете получить больше информации
                        с помощью этих контактных данных</p>

                    <div className="location">
                        <div><img width={80} src="./reg-image/home.jpg" alt="" /></div>
                        <div>
                            <p>Massiv 11 52B, Yunusobod district Tashkent,<br />Uzbekistan</p>
                        </div>
                    </div>

                    <div className="location">
                        <div><img width={80} src="./reg-image/email.jpg" alt="" /></div>
                        <div>
                            <ul>
                                <li><a href="/">sales@assitech.uz</a></li>
                                <li><a href="/">Ceo@assitech.uz</a></li>
                                <li><a href="/">Sevinch@assitech.uz</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="location">
                        <div><img width={80} src="./reg-image/call.jpg" alt="" /></div>
                        <div>
                            <a href="tel:+998998159885">+998 99 815 98 85</a>

                        </div>
                    </div>

                    <div className="location">
                        <div><img width={80} src="./reg-image/time.jpg" alt="" /></div>
                        <div>
                            <p>Пн-Пт с 09:00 до 18:00 Ташкент</p>
                        </div>
                    </div>
                </div>



                <div data-aos="fade-right" className="registr-contact">
                      <h1  style={{marginTop: '20px', }}>Bizga qanday savolingiz bor?</h1>
                    <form className='registr-form' action="">
                      
                        <label htmlFor="">Ismingizni kiriting <span>*</span> </label>
                        <input type="text" placeholder='Ismingizni kiriting' />
                        <label htmlFor="">Telefon raqami <span>*</span> </label>
                        <input type="text" placeholder='Ismingizni kiriting' />
                        <label htmlFor="">Sizning xabaringiz <span>*</span> </label>
                        <textarea placeholder='Sizning xabaringiz' name="" id=""></textarea>
                        <button className='registr-btn'>Yuborish</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Registr