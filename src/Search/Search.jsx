import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';




export default function Search() {
  
 
  const[search , setSearch]= useState([]);
  const [moviesContainer, setMovies] = useState([]);
  const [tvContainer, setTv] = useState([]);
  const[value, setValue]=useState('')


  async function getData(mediaType, setFun){
    let{data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c`);
    setFun(data.results)
      }
    
      useEffect(() => {
        getData('movie', setMovies) ;
        getData('tv', setTv) ;
        
      }, [])
      


  async function getSearch(e){
      let {data} = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=26357cbc916cdded8bdec4976f49936a&language=en-US&query=${e}&page=1&include_adult=false`);
      setSearch(data.results)
      console.log(e)
      console.log(data)
  }



  return (
   <>
   <div className='d-flex justify-content-center'>
   <input onKeyUp={(e)=>{
  getSearch(e.target.value) ;
  setValue(e.target.value);
  }} class="form-control w-50  me-5" type="search" placeholder="Search" />
  </div>
   {value == '' ? <>
   <div className="container mt-5">
    <div className="row">
     
      {moviesContainer.map((movie)=>{
       
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
  <div className="container ">
    <div className="row">
      
      {tvContainer.map((tv)=>{
       
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
  </div></> : 
  <div className="container mt-5">
  <div className="row">
   
    {search.map((movie)=>{
     
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
  }
 
   </>

  )
}
