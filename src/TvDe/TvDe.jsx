import axios from 'axios';

import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


export default function TvDe() {
    const [tvDetails, setTv] = useState({});
    const [genres, setGenres] = useState([]);
    async function getTvDetails(Id){
        const {data}= await axios.get(`https://api.themoviedb.org/3/tv/${Id}?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c`);
        setTv(data)
        setGenres(data.genres)
        console.log(data)
        
          }
          useEffect(() => {
           getTvDetails(TvId)
           
            
          }, [])
 let{TvId} = useParams()

   
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5">
            <img src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`} className='w-100 rounded-4' alt="" />
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-6">
              <h1 className='mt-5 fw-bold '>{tvDetails.name}</h1>
              <h5 className='text-grey mb-5 '>{tvDetails.tagline}</h5>
              <div className='d-flex mb-5'>
              <div >{genres.slice(0,1).map((genre)=>{
                return  <div className='bg-info p-2 fw-bold rounded-2 me-5'>{genre.name}</div>
              })}</div>
              <div >{genres.slice(1,2).map((genre)=>{
                return   <div className='bg-info p-2 fw-bold rounded-2 me-5'>{genre.name}</div>
              })}</div>
              <div >{genres.slice(2,3).map((genre)=>{
                return   <div className='bg-info p-2 fw-bold rounded-2 me-5'>{genre.name}</div>
              })}</div>
               </div>
               <p className='mt-3 fs-5'>Vote : <span className='text-info  fw-bold'>{tvDetails.vote_average}</span></p>
               <p className='mt-3 fs-5'>Vote Count : <span className='text-info  fw-bold'>{tvDetails.vote_count}</span></p>
               <p className='mt-3 fs-5'>popularity : <span className='text-info  fw-bold'>{tvDetails.popularity}</span></p>
               <p className='mt-3 fs-5 mb-5'>Release Date : <span className='text-info  fw-bold'>{tvDetails.release_date}</span></p>
               <p>{tvDetails.overview}</p>
              
            </div>
        </div>
    </div>
  )
}
