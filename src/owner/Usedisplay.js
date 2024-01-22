import React, { useEffect } from 'react'
import {  useSelector,useDispatch} from 'react-redux' 
import {  getUsersThunk } from '../Slice/usersSlice'; 
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button'; 
import '../App.css'; 
function Usedisplay() { 
    const{userslist,error}=useSelector(state=>state.user)  
    console.log(userslist)
  const dispatch=useDispatch()
 useEffect(()=>{   
  const ss=async()=>{
await dispatch(getUsersThunk()) 
  } 
  ss()
 },[dispatch]) 
 //console.log(error)

  return ( <div className='box'> 
  <div style={{display: "flex", margin: "30px", flexWrap: "wrap", justifyContent: "space-between", width: "75%"  }}>
   <>{!error?<> {userslist.map((user)=><div  key={user._id}> 
   <Card style={{width: '18rem',background:"beige"}}>
   <Card.Img variant="top" src='' />
   <Card.Body  >
     <Card.Title>{user.name}</Card.Title>
     <Card.Text>
      {user.email}
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card></div>)}</>
   :<h1> {error!=="2"&&error!=="1"?error:""}</h1>}
   
   </></div></div>
  )
}

export default Usedisplay