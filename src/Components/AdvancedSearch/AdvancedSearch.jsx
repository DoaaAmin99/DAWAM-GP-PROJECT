import React, { useEffect, useState } from 'react'
import  './AdvancedSearch.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdvancedSearch() {
  const [awqaf, setAwqaf] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getWaqfSearch(searchQuery)
  {
    setLoading(true);

    //respone.data
    let {data} = await axios.get(`http://afdinc-001-site5.itempurl.com/api/waqf/Search/${searchQuery}`);
    // console.log(data);
    setAwqaf(data);

    setLoading(false);
  }

  useEffect(()=>{
    getWaqfSearch();
  },[])


  return <>
  <div id="search" className="py-5 my-5">
  <div className="search-head text-center ">
      <h3 className="search-title pt-5">تصفح الأوقاف</h3>
      <div className="input-icons">
      <Link >
        <i className='fas fa-search icon ' ></i>
        
      </Link>
      <input
            className="form-control input-field m-auto w-50 my-4 rounded-pill "
          />
      </div>
  </div>
  </div>
        
    </>
}
