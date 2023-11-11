
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Home() {

  const [moviesContainer, setMovies] = useState([]);
  const [tvContainer, setTv] = useState([]);
  const [personContainer, setPerson] = useState([]);

 async function getData(mediaType, setFun){
let{data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c`);
setFun(data.results)
  }

  useEffect(() => {
    getData('movie', setMovies) ;
    getData('tv', setTv) ;
    getData('person', setPerson) ;
    
  }, [])
  



  return <>
  
  <div className="container home">
    <div className="row">
      <div className="col-md-4">
        <div>
          
          <h1 className='fw-bold mt-5'>Trending <br />Movies <br />to watch now</h1>
          <p className='text-info'>most watched movies by days</p>
          <hr/>
        </div>
      </div>
      {moviesContainer.slice(0,10).map((movie)=>{
       
        return  <div className='col-md-2 position-relative'>
        
          <Link to={`/moviedetails/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100 rounded-4' alt="" />
          </Link>
          <h5 className='text-center'>{movie.title}</h5>
        
          <div className="rate position-absolute top-0  bg-info rounded-3 py-2 px-2">
            {movie.vote_average}
          </div>
        </div>
        
      })}
    </div>
  </div>

  {/* Tv  */}
  
  <div className="container home">
    <div className="row">
      <div className="col-md-4">
        <div>
          
          <h1 className='fw-bold mt-5'>Trending <br />Tv <br />to watch now</h1>
          <p className='text-info'>most watched Tv by days</p>
          <hr/>
        </div>
      </div>
      {tvContainer.slice(0,10).map((tv)=>{
       
        return <div className='col-md-2 position-relative'>
          
          <Link to={`/tvdetails/${tv.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className='w-100 rounded-4' alt="" />
          </Link>
          <h5 className='text-center' >{tv.name}</h5>
        
          <div className="rate position-absolute top-0  bg-info rounded-3 py-2 px-2">
            {tv.vote_average}
          </div>
        </div>
        
      })}
    </div>
  </div>
  {/* Person  */}
  <div className="container home">
    <div className="row">
      <div className="col-md-4">
        <div>
          
          <h1 className='fw-bold mt-5'>Trending <br />Person<br />to watch now</h1>
          <p className='text-info'>most watched persons by days</p>
          <hr/>
        </div>
      </div>
      {personContainer.slice(0,10).map((person)=>{
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
  
  </>
   
  
}
