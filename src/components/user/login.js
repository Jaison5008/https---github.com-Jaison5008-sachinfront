import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{  useState} from 'react';  
import { getUsersThunkid, logingetUsersThunk } from '../../Slice/usersSlice';  
import{getCartServerids} from '../../Slice/cartslice'
import{useDispatch} from "react-redux" 
import { useNavigate } from 'react-router-dom'; 

import '../../App.css'; 
function Login() {  
  //

const [email,setEmail]=useState(''); 
const[password,setPassword]=useState('');
 const[errors,setError]=useState();  
 
 console.log(errors)
const dispatch=useDispatch()

const navi=useNavigate()




const login=async(e)=>{  
 const mm= await dispatch(logingetUsersThunk({email,password}))    
       console.log(mm)
        //console.log(mm.payload.message)  
        // console.log(mm.meta.requestStatus)
 if(mm.payload==='loginsucess') {    
  const _id=localStorage.getItem('id') 
  console.log(_id)
  const id=    JSON.parse(_id) 
    dispatch(getUsersThunkid(id)) 
  //onst sd=await dispatch (getcartid(_id)) 
   dispatch (getCartServerids(id))
   //console.log(sd)
  navi("/")
 } 
 else  { 
  
  setError(mm.payload.error)
 }
 }
  
  
  
 
 return ( <div className='box'>
   <Form  style={{marginLeft:'10px',marginRight:'30px'}}> 
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      
     

      
      <Button variant="primary" onClick={login}>
        Submit
      </Button>
    </Form>
  
  <h1>{errors}</h1>
  </div>
  
  );
}

export default Login;