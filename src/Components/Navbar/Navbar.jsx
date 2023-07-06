import React, { useEffect, useState } from 'react'
import  "./Navbar.css";
import Logo from '../Logo/Logo';
import { Link, NavLink, useLocation } from 'react-router-dom';



export default function Navbar() {
  const [navBg , setNavbg] = useState('transpernt');
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname == "/" || location.pathname == "/about"){
      setNavbg('transpernt');
    }
    else {
      setNavbg('#005B4B');
    }
  },[location.pathname])

  return <>

        <nav className="navbar navbar-expand-lg w-100    " style={{backgroundColor: navBg}}>
            <div className="container">
            <Link className="navbar-brand" to="/">
              <Logo height={'6rem'}/>
            </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mb-5 mb-lg-0 fs-5">

                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page"  to="/" >الرئيسية</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">من نحن</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="awqaf">الأوقاف</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="advancedsearch">البحث المتقدم</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">تواصل معنا</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        
    </>
}
