import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Login(props) {


  const [user, setUser]= useState({
   
    email : '',
   
    password : '',
  });

const [apiMsg,setMsg]= useState('');
  let myUser = {...user}
  let NavigateTo = useNavigate()

const [errorDetails, setError] = useState([]);


  function showAlert(inputName){
    let x=   errorDetails.filter((err)=>{
    return err.message.includes(inputName);
    
    })
    if (x[0]!== undefined) {
     
      return <p className='text-danger'>{x[0].message}</p>
     
    }else{
      return ''
    }
   
  }

  function validation(){
    const schema = Joi.object({
     
    email : Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    
    password : Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    let validationResult = schema.validate(user , {abortEarly:false})
    console.log(validationResult)

    if (validationResult.error !== undefined) {
      setError(validationResult.error.details)
      showAlert()
      return false
   
    }else{
      setError([])
      return true
    }
  }



  async function login(){

    if (validation()) {
      let{data}=await axios.post('https://movies-api.routemisr.com/signin', user);
      console.log(data)
      setMsg(data.message)
      if (data.message == 'success') {
        props.setIsLogin(true);
        localStorage.setItem('token' , data.token);
       

      NavigateTo('/home')
      }
    }else{
    
    }
      
      }
    



  return (
    <>
    <div className='display'>
    <form onSubmit={(e)=>{login(); e.preventDefault();}} className='w-50 text-white'>
    <h1 className='text-center mb-5'>Login Form</h1>

  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input  onChange={(e)=>{myUser.email = e.target.value ; setUser(myUser);}} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errorDetails.length>0 ? showAlert('email'): ''}
  </div>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  onChange={(e)=>{myUser.password = e.target.value ; setUser(myUser);}} type="password" class="form-control" id="exampleInputPassword1"/>
    {errorDetails.length>0 ? showAlert('password'): ''}
  </div>
  
  
  <button type="submit" class="btn btn-primary">Login</button>
  <h5 className='text-danger'>{apiMsg}</h5>
</form>
</div>
    </>
  )
}
