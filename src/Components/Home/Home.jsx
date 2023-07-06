import React from 'react'
import "./Home.css";
import About from '../About/About';
import AwqafCounter from '../AwqafCounter/AwqafCounter';
import HomeSearchCards from '../HomeSearchCards/HomeSearchCards';
import SearchInputHome  from '../SearchInputHome/SearchInputHome';

export default function Home() {
  return <>

        {/* ============================HEADER==================================== */}

        

  <a href="#header" id="btnUp" className="btn rounded-circle text-white">
    <i className="fas fa-arrow-up"></i>
  </a>
        {/* ===========================Header====================== */}
        <header className='py-5 mb-5'id="header">
          <div className='overlay  d-flex flex-column justify-content-center p-5'>
            
            <div className='container '>
              <h1 className='title'>دوام</h1>
              <p className='text'>
              {" "}
                منصة لحفظ الحجج الوقفية باستخدام تقنية البلوكتشين ضد تغير الظروف والأعوام
                </p>
            </div>
          </div>
    </header>

    {/* ==========================ABOUT==================================== */}
    <About/>  

    <AwqafCounter/>
    <SearchInputHome/>
    <HomeSearchCards/>
    </>
}
