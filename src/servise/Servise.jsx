import React from 'react'
import './servise.css'

const Servise = () => {
  return (
    <div  className='servise-container'>
      <div data-aos="fade-up" className="servise-info-1">
        <h1>Yetkazib beramiz <span>tibbiy uskunalarni to'g'ridan-to'g'ri ishlab chiqaruvchidan</span></h1>
        <img width={300} src="https://www.assitech.uz/assets/aparat-DR1Mzz8Q.png" alt="" />
      </div>
      <div data-aos="fade-down" className="servise-info-2">
        <img width={300} src="https://www.assitech.uz/assets/aparat1-Cy8L3mWs.png" alt="" />
        <h1>Hal qilamiz <span>kompleks tibbiy jihozlash va servis xizmatlari vazifalarini</span></h1>
      </div>
    </div>
  )
}

export default Servise