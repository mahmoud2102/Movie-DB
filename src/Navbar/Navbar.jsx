import axios from 'axios';
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';




export default function Navbar(props) {


  const[search , setSearch]= useState([]);
 
  
  async function getSearch(e){
      let {data} = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=26357cbc916cdded8bdec4976f49936a&language=en-US&query=${e}&page=1&include_adult=false`);
      setSearch(data.results)
      console.log(e)
      console.log(data)
  }

 let ui = search.map((item)=>{
  return item
})
console.log(ui)
let NavigateTo = useNavigate()

function logOut(){
  props.setIsLogin(false);
NavigateTo('/login')
}

  return <>
    <nav className="navbar  navbar-expand-sm shadow-lg navbar-dark  ">
      <div className="container-fluid">
      <a className="navbar-brand ms-5 fw-bolder fs-3" href="#">Noxe</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 fs-5 mt-lg-0 ms-5">
        {!props.isLogin? <>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'} to={''}>Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'} to={'login'}>Loin</NavLink>
          </li>
          </> : ''}
         {props.isLogin? <>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'} to={'home'}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'} to={'movies'}>Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'} to={'tv'}>Tv Series</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'}to={'people'}>People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=>
              isActive ? 'text-info nav-link': 'nav-link'}to={'about'}>About</NavLink>
          </li>
          </> : ''}
        </ul>
        <ul className="navbar-nav ms-auto me-5 mt-2 fs-5 mt-lg-0">
          <p className='mt-2  fw-bold'>{props.isLogin? props.userName: ''}</p>
         <Link className='text-decoration-none' to={'search'}>
       
      {props.isLogin?<a className=''> <i class="fa-solid fa-magnifying-glass m-3"></i></a>: ''}  
        </Link>
        <i class="fa-brands fa-facebook text-white"></i>
        <i class="fa-brands fa-instagram text-white"></i>
        <i class="fa-brands fa-youtube text-white"></i>
        <i class="fa-brands fa-spotify text-white"></i>
          
          <li className="nav-item">
            <a className='nav-link' onClick={logOut}>Logout</a>
          </li>
          {/* <li className='nav-item'>
            <a className='nav-link' onClick={logOut}>Log Out</a>
          </li>
        */}
        </ul>
        
      </div>
    </div>
  </nav>
 


 
  
  </>
    
   
}
