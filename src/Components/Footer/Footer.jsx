import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className='  p-2 text-white mt-5'>
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3 ">
          <div className="">
          <h3 className='title'>
            منصة دوام
          </h3>
          <div className="socialIcon mt-3">
          <a href=""><i className="fa-brands fa-facebook-f cursor-pointer"></i></a>
          <a href=""><i className="fa-brands fa-twitter cursor-pointer"></i></a>
          <a href=""><i className="fa-brands fa-github cursor-pointer"></i></a>
          </div>
          </div>
        </div>
        <div className="col-md-4 py-3 ">
          <div className="footer-content">
          <h3 className='title me-4'>
            تصفح
          </h3>
          <div className="footerBrowse mt-3 ">
            <ul className=' mb-lg-0 p-0 '>
              <li className=''><Link to="/" className=''>الرئيسية</Link></li>
              <li className=''><Link to="about" className=''>من نحن</Link></li>
              <li className=''><Link to="awqaf" className=''>الأوقاف</Link></li>
              <li className=''><Link to="advancedsearch" className=''>البحث المتقدم</Link></li>
              <li className=''><Link to="contact" className=''>تواصل معنا</Link></li>
            </ul>
          
          </div>
          </div>
          
        </div>
        <div className="col-md-4 py-3 ">
          <div className="">
          <h3 className='title me-4'>
            تواصل معنا
          </h3>
          <div className="socialIcon mt-3">
            <ul className=' mb-lg-0  '>
              <li className='fs-5 '> 010022555777 <i className="fa-solid fa-phone"></i></li>
              <li className='fs-5 '> DAWAM@dawam.org <i className="fa-solid fa-envelope"></i></li>
              
            </ul>
          
          </div>
          </div>
          
        </div>
        
        

        
      </div>
    </div>
    <div className="container pt-3">
          
          <p className="text-white text-center footer-p " dir="ltr">
              &copy; 2023,All Right Reserved By DawamBC | info@DawamBC.org
            </p>
          
      </div>
  </footer>
}
