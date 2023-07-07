import React, { useEffect, useState } from 'react'
import  './AdvancedSearch.css';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


export default function AdvancedSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  
  useEffect(() => {
    const search = async () => {
      const respond = await axios.get(
        `http://afdinc-001-site5.itempurl.com/api/waqf/Search/${searchQuery}`
      );
  
      setSearchResults(respond.data);
    };
    if(searchQuery){
      search();
    }
  }, [searchQuery]);




  const fetchResult=searchResults.map((waqf)=>{
    return<>
      <div  className="col-md-12" key={waqf.id}>
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
            </div>
     
      
    </>
    
  });


  const { searchQuerys } = useParams();
const [searchResultsPage, setSearchResultsPage] = useState([]);

useEffect(() => {
  const fetchSearchResults = async () => {
    const response = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/waqf/Search/${searchQuerys}`
    );
    setSearchResultsPage(response.data);
  };
  if(searchQuerys){
     fetchSearchResults();
  }
  
}, [searchQuerys]);

return<>
<div className="search-head text-center pt-5 my-5 ">
      <h3 className="search-title pt-5 ">تصفح الأوقاف</h3>
      <div className="input-icons">
      
        <i className='fas fa-search icon '></i>
        
      
      <input
            className="form-control input-field m-auto w-50 my-4 rounded-pill "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
  </div>


  <div className="container awqaf" id='awqaf'>
      <div className="row">
      {fetchResult}
      <div>
        {searchResultsPage.map((waqf)=>(
          <div key={waqf.id} className="col-md-12">
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
        </div>
        ))}
      </div>
      </div>
      
    </div>


</>
    
}




