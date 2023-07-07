import React from 'react'
import  './ContactUs.css';
import { Link, NavLink } from 'react-router-dom';

export default function ContactUs() {
  return <>
<div className="container contact py-5 my-5">
<div className="row g-1 my-5">
<div className=" col-md-5 offset-1 ">
<h3 className=' mb-4' style={{color:'var( --green-color)'}}>تابعنا لمعرفة المزيد من المعلومات</h3>
<div className="socialIcon mt-3">
            <ul className=' mb-lg-0  '>
              <li className='fs-4'> <i className="fas fa-globe fs-4"></i> <NavLink to='#' className='fs-5 icon-link'>http:/www.example.org</NavLink> </li>
              <li className='fs-4'> <i className="fab fa-facebook fs-5"></i> <NavLink to='#' className='fs-5 icon-link'>http:/www.facebook.com</NavLink> </li>
              <li className='fs-4'> <i className="fab fa-instagram fs-4"></i> <NavLink to='#' className='fs-5 icon-link'>DAWAM/دوام</NavLink> </li>
              <li className='fs-4'> <i className="fab fa-twitter fs-4"></i> <NavLink to='#' className='fs-5 icon-link'>DAWAM/دوام</NavLink> </li>
              <li className='fs-4'> <i className="fab fa-linkedin fs-4"></i> <NavLink to='#' className='fs-5 icon-link'>DAWAM/دوام</NavLink> </li>
              <li className='fs-4'> <i className="fas fa-phone fs-4"></i> <NavLink to='#' className='fs-5 icon-link'>010022555777</NavLink> </li>
          
            </ul>
          
          </div>
</div>
<div className=" col-md-6">
<form className='form-style'>
         <input className="form-control contact-input pt-2 pb-2" type="text" placeholder="الأسم" aria-label="default input example"/>
         <input className="form-control contact-input pt-2 pb-2" type="text" placeholder="البريد الإلكتروني" aria-label="default input example"/>
         <textarea className="form-control" type="text" placeholder="اترك رسالتك" aria-label="default input example"/>
            <div className='col-12'>
            <Link className='btn btn-sm btn-green ' to="/submit" role="button">إرسال</Link>
            </div>
       </form> 
</div>
</div>
</div>

              
      
    
    </>
}
