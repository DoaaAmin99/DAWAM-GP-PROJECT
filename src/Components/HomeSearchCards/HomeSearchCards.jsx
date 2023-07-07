import React, { useEffect, useState } from 'react'
import  './HomeSearchCards.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeSearch() {
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
  <div className="container  py-5 ">
  <div className="row">
    {loading === true ? <section id="loading">
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
    </section> : 
    awqaf.slice(0,4).map((waqf)=> 
    <div key={waqf.id} className="col-md-3">
        <div className="search-cards cardsHover bg-white border-1 shadow ">
          <img src={"http://afdinc-001-site5.itempurl.com" + waqf.imageUrl} className='w-100' alt="" />
          <div className="card-border">
            <h3 className='py-3 h6'>{waqf.waqfName}</h3>
            <p className="desc-search">
              {waqf.waqfDescription.split(' ').slice(0, 15).join(' ')}
            </p>
            <Link className="btn btn-lg btn-green w-100" to={`/waqfDetails/${waqf.id}`}>المزيد</Link>
          </div>
        </div>
      </div> ) }
        </div>
  </div>
        
    </>
}

