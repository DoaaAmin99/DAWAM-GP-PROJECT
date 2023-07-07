import React, { useEffect, useState } from 'react'
import './AwqafPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function AwqafPage() {
  const [awqaf, setAwqaf] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getWaqf()
  {
    setLoading(true);

    //respone.data
    let {data} = await axios.get(`http://afdinc-001-site5.itempurl.com/api/waqf`);
    // console.log(data);
    setAwqaf(data);

    setLoading(false);
  }

  useEffect(()=>{
    getWaqf();
  },[])
  return <>
  <a href="#awqaf" id="btnUp" className="btn rounded-circle text-white">
    <i className="fas fa-arrow-up"></i>
  </a>
        <div className="container awqaf  py-5 my-5" id='awqaf'>
        <h2 className="search-title text-center pt-5">الأوقاف</h2>
          <div className="row">
          {loading === true ?  <section id="loading">
        <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
        </div>
    </section> : awqaf.map((waqf)=> <div key={waqf.id} className="col-md-12">
              <div className="row awqf-cards cardsHover my-5 bg-white border-1 shadow rounded-5">
                <div className="col-md-3 offset-1">
                <img src={"http://afdinc-001-site5.itempurl.com"+waqf.imageUrl} className='w-100 ' alt=""/>
                </div>
                <div className="col-md-8 py-5">
                    <h3 className='py-3 h6'>{waqf.waqfName}</h3>
                    <p className="desc-search ps-4">
                      {waqf.waqfDescription.split(' ').slice(0, 150).join(' ')}
                    </p>
                    <Link className="btn btn-lg btn-green w-25" to={`/waqfDetails/${waqf.id}`}>المزيد</Link>
                </div>
              </div>
            </div>)}
            
          </div>
        </div> 
    </>
}
