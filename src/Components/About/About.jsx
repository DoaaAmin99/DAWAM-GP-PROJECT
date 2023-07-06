import React from 'react'
import './About.css';
import AboutImage from '../../Assests/Images/About-logo.jpeg'
import { Link } from 'react-router-dom';

export default function About() {
  return <>
        <div className="about-content py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-1">
                <img className='rounded img-fluid'  src={AboutImage} alt="logo" />
              </div>
              <div className="col-md-7 py-5 py-md-0">
              <div className='description fs-5  '>
                  <p className='hame align-items-center'>عبر العهود الأسلامية أنشأت أوقاف خلدها التاريخ حققت مقاصدها عبر العصور 
                      و ما خطه الرحالة وكاتبي السير أرشدنا إلى روائع لم تكن بالحسبان 
                      ففي اوج حضارتنا خصص وقف لكل حاجة ومطلب  وكان  لنا وراء كل وقف 
                    قصة يدلنا عليها الواقف والدافع والجهة الموقوف عليها والوقف و وثيقة 
                    وغيره
                  </p>
            <div className='button text-center'>
            <Link className="btn  btn-lg btn-green rounded-5" to="about" >المزيد</Link>
            </div>
            </div>
              </div>
            </div>
          </div>
        </div>
    </>
}
