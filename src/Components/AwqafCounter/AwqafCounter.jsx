import React, { useState } from 'react'
import './AwqafCounter.css';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';

export default function AwqafCounter() {
  const [counterOn, setCounterOn] = useState(false);
  return <>
  <div className="counter-image py-5" id='counter' >
  <div className="overlay py-5 d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4 ">
          <div className="counter-items  text-center py-md-3 ">
              <i className="fa-solid fa-earth-africa text-white fs-1 py-sm-1 py-md-2"></i>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <p className="py-md-2  counter-p count-num">
                  {counterOn && (<CountUp start={0} end={150000} duration={3} delay={0}/>)}+
                </p>
              </ScrollTrigger>
              <p className="text-white  counter-p   ">عدد الأوقاف في مصر   </p>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="counter-items  text-center py-md-3 ">
              <i className="fa-solid fa-earth-africa text-white fs-1 py-sm-1 py-md-2"></i>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <p className="py-md-2  counter-p count-num">
                  {counterOn && (<CountUp start={0} end={16000} duration={3} delay={0}/>)}+
                </p>
              </ScrollTrigger>
              <p className="text-white  counter-p   ">عدد الأوقاف التابعة للأزهر   </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="counter-items  text-center py-md-3 ">
              <i className="fa-solid fa-earth-africa text-white fs-1 py-sm-1 py-md-2"></i>
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <p className="py-md-2  counter-p count-num">
                  {counterOn && (<CountUp start={0} end={13} duration={3} delay={0}/>)}+
                </p>
              </ScrollTrigger>
              <p className="text-white  counter-p   ">عدد الأوقاف في دوام   </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
        
    </>
}
