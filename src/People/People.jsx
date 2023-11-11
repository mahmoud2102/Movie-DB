import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function People() {
  const [personContainer, setPerson] = useState([]);
  
  async function getData(mediaType, setFun){
    let{data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c`);
    setFun(data.results)
      }
    
      useEffect(() => {
      
        getData('person', setPerson) ;
        
      }, [])
      
    
  return (
    <div className="container-fluid home">
    <div className="row">
      <div className="col-md-4">
        <div className='ms-5'>
          
          <h1 className='fw-bold mt-5'>Trending <br /><span className='text-info'>Person</span><br />to watch now</h1>
          <p className='text-info'>most watched persons by days</p>
          <hr/>
        </div>
      </div>
      {personContainer.map((person)=>{
        return <div className='col-md-2 position-relative'> 
       
     
       <Link to={`/peopledetails/${person.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} className='w-100 rounded-4' alt="" />
          </Link>
         
          <h5 className='text-center'>{person.name}</h5>
        
          <div className="rate position-absolute top-0  bg-info rounded-3 py-2 px-2">
            {person.popularity}
          </div>
        </div>
        
      })}
    </div>
    
  </div>
  
  )
}
