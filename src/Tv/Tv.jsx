import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tv() {

  const [tvContainer, setTv] = useState([]);
  const [pageNum, setNum] = useState(1);

  async function getData(mediaType, setFun,pageNum){
    let{data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=7cc217e7ddb8d4944190bfe2d8a60d3c&page=${pageNum}`);
    setFun(data.results)
      }
    
      useEffect(() => {
       
        getData('tv', setTv,pageNum) ;
       
        
      }, [])
  return (
    <div className="container-fluid home">
    <div className="row">
      <div className="col-md-4">
        <div className='ms-5'>
          
          <h1 className='fw-bold mt-5'>Trending <br /><span className='text-info'>Tv</span> <br />to watch now</h1>
          <p className='text-info'>most watched Tv by days</p>
          <hr/>
        </div>
      </div>
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
    <nav aria-label="Page navigation d-flex example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <Link onClick={()=>{
      setNum(pageNum-1)
      getData('tv', setTv,pageNum)
     }}  class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li>
     
   
     <li class="page-item"><Link onClick={()=>{
      setNum(1)
      getData('tv', setTv,1)
     }}  class="page-link" >1</Link></li>
    <li class="page-item"><Link onClick={()=>{
      setNum(2)
      getData('tv', setTv,2)
     }}  class="page-link" >2</Link></li>

    <li class="page-item"><Link onClick={()=>{
      setNum(3)
      getData('tv', setTv,3)
     }}  class="page-link" >3</Link></li> 

    <li class="page-item"><Link onClick={()=>{
      setNum(4)
      getData('tv', setTv,4)
     }}  class="page-link" >4</Link></li> 

    <li class="page-item"><Link onClick={()=>{
      setNum(5)
      getData('tv', setTv,5)
     }}  class="page-link" >5</Link></li> 

    <li class="page-item"><Link onClick={()=>{
      setNum(6)
      getData('tv', setTv,6)
     }}  class="page-link" >6</Link></li> 
    <li class="page-item"><Link onClick={()=>{
      setNum(7)
      getData('tv', setTv,7)
     }}  class="page-link" >7</Link></li> 
    <li class="page-item"><Link onClick={()=>{
      setNum(8)
      getData('tv', setTv,8)
     }}  class="page-link" >8</Link></li> 
    <li class="page-item"><Link onClick={()=>{
      setNum(9)
      getData('tv', setTv,9)
     }}  class="page-link" >9</Link></li> 
    <li class="page-item"><Link onClick={()=>{
      setNum(10)
      getData('tv', setTv,10)
     }}  class="page-link" >10</Link></li> 
    
    <li class="page-item">
     
      <Link onClick={()=>{
        setNum(pageNum+1)
        getData('tv', setTv,pageNum)
      }} class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </Link>
   
    </li>
  </ul>
</nav>
  </div>
  )
} 
