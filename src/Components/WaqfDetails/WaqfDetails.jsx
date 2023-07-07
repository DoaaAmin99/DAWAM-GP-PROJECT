import React, { useEffect, useState } from 'react'
import  './WaqfDetails.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function WaqfDetails() {
  const [waqfDetails, setWaqfDetails] = useState(null)
  const [loading, setLoading] = useState(false);
  let params = useParams();
  async function getWaqfDetalis(id)
  {
    setLoading(true);

    let {data} = await axios.get(`http://afdinc-001-site5.itempurl.com/api/waqf/${id}`)
    setWaqfDetails(data);

    setLoading(false);
  }
  useEffect(()=>{
    getWaqfDetalis(params.id);
  },[])
  return <>
        <div className="container">
          <div className="row py-5">
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
    </section> : <>
          <h2 className="text-center mb-5 waqf-name-header pt-5 my-5">{waqfDetails?.waqfName}</h2>
          <div className="col-md-8">
            <ul>
              <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4"> اسم الواقف: </span>
                  {waqfDetails?.founderName}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4">تاريخ الوقف هجرياً:</span>
                {waqfDetails?.establishmentDateH}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4">تاريخ الوقف ميلادياً:</span>
                  {waqfDetails?.establishmentDate}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4">نوع الوقف:</span>
                  {waqfDetails?.waqfType}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4">تصنيف الوقف :</span>
                  {waqfDetails?.waqfActivity}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4"> ريع الوقف :</span>
                  {waqfDetails?.waqfCountry}-{waqfDetails?.waqfCity}
                </li>
                <li className="pb-2 fs-5">
                  <span className="fw-bold detail fs-4">وصف الوقف :</span>
                  {waqfDetails?.waqfDescription}
                </li>
                <Link className="btn btn-lg btn-green mt-3"  to={"http://afdinc-001-site5.itempurl.com/" + waqfDetails?.documentUrl} target='_blank'>عرض الوثيقة</Link>
            </ul>
          </div>
          <div className="col-md-4">
          <img src={"http://afdinc-001-site5.itempurl.com" + waqfDetails?.imageUrl} className="w-75 rounded"
            />
          </div>
          </>
    }
          </div>
        </div>
    </>
}
