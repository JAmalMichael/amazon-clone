import React from 'react'
import './Styles/home.css'

function Home() {
  return (
    <div>
    <div 
    className="home__container flex justify-center mx-auto max-w-[1500px]">
    <img
      className="home__image w-[100%] z-[-1] mb-[-150px]"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      alt=""
    />
  </div>
    </div>
  )
}

export default Home