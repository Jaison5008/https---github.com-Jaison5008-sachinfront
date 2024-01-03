import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useEffect, useState} from 'react';  
import { useDispatch ,useSelector} from 'react-redux';
import {  patchUsersThunk} from '../../Slice/usersSlice'  
import { useNavigate } from 'react-router-dom';
//import { getType } from '@reduxjs/toolkit';
function Updatelist() {  
    const{userselect}=useSelector((state)=>state.user) 
   // console.log(userselect) 
    const [name,setName]=useState('')
const [email,setEmail]=useState(''); 
const [password,setPassword]=useState('');  
const [_id ,setId]=useState('')
//const [mobile,setMobile]=useState('')   
const navi=useNavigate()
const dispatch=useDispatch() 

const update=(e)=>{  
  e.preventDefault()
    dispatch(patchUsersThunk({name,email,password,_id}))
    // dispatch(getUsersThunk())
    navi('/view')
}  

useEffect(()=>{  
   setId(userselect._id)
    setName(userselect.name) 
    setEmail(userselect.email) 
    setPassword(userselect.password)
},[])

  return ( <> 
   <Form> 
   <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group> 


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
     

      
      <Button variant="primary" type="submit" onClick={update}>
        update
      </Button>
    </Form>
  
  
  
  </>
  );
}

export default Updatelist;