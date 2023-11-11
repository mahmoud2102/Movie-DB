import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const [user, setUser]= useState({
    first_name : '',
    last_name : '',
    email : '',
    age : '',
    password : '',
  });

const [apiMsg,setMsg]= useState('');
  let myUser = {...user}
  // useEffect(()=>{
  //   if(user!={
  //     first_name : '',
  //     last_name : '',
  //     email : '',
  //     age : '',
  //     password : ''
  //   }){
  //   console.log(user)
  //   }
  // },[user]);
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
      first_name : Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    last_name : Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    email : Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    age : Joi.number().min(18).max(50),
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




  async function register(){

if (validation()) {
  let{data}=await axios.post('https://movies-api.routemisr.com/signup', user);
  console.log(data)
  setMsg(data.message)
  if (data.message == 'success') {
  NavigateTo('/login')
  }
}else{

}
  
  }


  return (
    <>
  <div className='display'>
    <form onSubmit={(e)=>{register(); e.preventDefault();}} className='w-50 text-white'>
    <h1 className='text-center mb-5'>Regitration Form</h1>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input   onChange={(e)=>{myUser.first_name = e.target.value ; setUser(myUser);}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   {errorDetails.length>0 ? showAlert('first_name'): ''}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input   onChange={(e)=>{myUser.last_name = e.target.value ; setUser(myUser);}} type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errorDetails.length>0 ? showAlert('last_name'): ''}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input  onChange={(e)=>{myUser.email = e.target.value ; setUser(myUser);}} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errorDetails.length>0 ? showAlert('email'): ''}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input   onChange={(e)=>{myUser.age = e.target.value ; setUser(myUser);}} type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errorDetails.length>0 ? showAlert('age'): ''}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  onChange={(e)=>{myUser.password = e.target.value ; setUser(myUser);}} type="password" class="form-control" id="exampleInputPassword1"/>
    {errorDetails.length>0 ? showAlert('password'): ''}
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <h5 className='text-danger'>{apiMsg}</h5>
</form>
</div>
    </>
  )
}
