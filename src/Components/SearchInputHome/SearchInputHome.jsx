import React, { useEffect, useState } from 'react'
import  './SearchInputHome.css';
import { Link } from 'react-router-dom';

export default function SearchInputHome() {
  const [searchQuerys, setSearchQuerys] = useState("");
  function handleSearch()
  {
    setSearchQuerys('');
  }

  return <>
  <div id="search" className="py-5">
  <div className="search-head text-center ">
      <h3 className="search-title pt-5">تصفح الأوقاف</h3>
      <div className="input-icons">
      <Link to={`/advancedsearch/${searchQuerys}`}>
        <i className='fas fa-search icon ' onClick={handleSearch}></i>
        
      </Link>
      <input
            className="form-control input-field m-auto w-50 my-4 rounded-pill "
            value={searchQuerys}
            onChange={(e) => setSearchQuerys(e.target.value)}
          />
      </div>
  </div>
  </div>
    </>
}
