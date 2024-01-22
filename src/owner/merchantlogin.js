import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';
import {   merchantlogingetUsersThunk } from '../Slice/usersSlice'; 
import { useDispatch } from 'react-redux'; 
import '../App.css'; 
function Mlogin() {   
    const navi=useNavigate()
    const [email ,setEmail]=useState("");
    const [password,setPassword]=useState("") ;
    const [error,setError]=useState('')
const dispatch=useDispatch(); 
const login=async(e)=>{ 
    e.preventDefault()
const response= await dispatch(merchantlogingetUsersThunk({email,password})) 
console.log(response) 
  if(response.meta.requestStatus==='fulfilled') {  
    
  navi('/userdisplay') 
  } else if(response.payload.error){ 
   setError(response.payload.error)
  }
 
}
  return (<div className='box'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
    </Form> 
    <h1>{error!=="2"?error:""}</h1></div>
  );
}

export default Mlogin;