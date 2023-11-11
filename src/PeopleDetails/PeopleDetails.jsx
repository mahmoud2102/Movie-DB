import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
export default function PeopleDetails() {
    const [peopleDetails, setPerson] = useState({});
   
    async function getPeopleDetails(Id){
        const {data}= await axios.get(`https://api.themoviedb.org/3/person/${Id}?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c`);
        setPerson(data)
     
        console.log(data)
        
          }
          useEffect(() => {
           getPeopleDetails(PeopleId)
           
            
          }, [])
 let{PeopleId} = useParams()

   
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-5">
            <img src={`https://image.tmdb.org/t/p/w500${peopleDetails.profile_path}`} className='w-100 rounded-4' alt="" />
            <p className='mt-3 fs-5'>Place of Birth : <span className='text-info  fw-bold'>{peopleDetails.place_of_birth}</span></p>
               <p className='mt-3 fs-5'>Birthday : <span className='text-info  fw-bold'>{peopleDetails.birthday}</span></p>
               <p className='mt-3 fs-5'>popularity : <span className='text-info  fw-bold'>{peopleDetails.popularity}</span></p>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-6">
              <h1 className='mt-5 fw-bold '>{peopleDetails.name}</h1>
              <h5 className='text-grey mb-5 '>{peopleDetails.known_for_department}</h5>
              <h5 className='text-grey mb-5 '>{peopleDetails.biography}</h5>
              <div className='d-flex mb-5'>
         
               </div>
            
               
              
            </div>
        </div>
    </div>
  )
}
