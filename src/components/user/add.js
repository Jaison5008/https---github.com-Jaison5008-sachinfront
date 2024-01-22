
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{ useState} from 'react';  
import { useDispatch ,} from 'react-redux';
import { addAsynkServer} from '../../Slice/usersSlice'  
import { useNavigate } from 'react-router-dom';
import '../../App.css'; 
function Add() {  
  
const[name,setName]=useState('');
const [email,setEmail]=useState(''); 
const [password,setPassword]=useState('');   
const[error,setError]=useState('');

const navi=useNavigate();  





const dispatch=useDispatch()
 

const Add=async(e)=>{  
  //e.preventDefault() 
  if(name&&email&&password){
 const mm= await  dispatch(addAsynkServer({name,email,password}))    
 console.log(mm.payload)
 if(mm.payload==='data post sucess') {  
  navi("/login")
 } 
 else  {  
 // console.log(mm.payload.error)
  setError(mm.payload.error) 

 } 
}else{ 
 setError('pls enter all fields')
}
 }     
 
 

 
 
   
  



  return ( <div className='box'> 
  
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
      
     

      
      <Button variant="primary" onClick={Add}>
        Submit
      </Button>
    </Form> 
  
    
    
  
 <h4> {error}</h4>
  
  </div>
  );
}

export default Add;