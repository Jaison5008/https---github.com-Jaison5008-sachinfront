import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux' 
import {addCartServer, update,getCartServerid} from '../../Slice/cartslice' 
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card' 
import '../../App.css'; 
const Viewcart = () => {   
  const [position ,setPosition]=useState(true)
  const dispatch=useDispatch() 
  const navi=useNavigate()
const {cartlistselected,error}=useSelector(state=>state.cart)  
const matchid=cartlistselected.matchid; 
const userid=JSON.parse(cartlistselected.userid);
const team=cartlistselected.team; 
const venue=cartlistselected.venue; 
const ticketclass=cartlistselected.ticketclass; 
const Numofticket=cartlistselected.Numofticket;

const confirmbook= async()=>{  

const mm= await dispatch(addCartServer({matchid,userid,team,venue,ticketclass,Numofticket}))  
//console.log(mm.payload)  
//console.log(mm.payload.message)
//console.log(mm.payload.error)
  if(mm.payload.error){  
    setPosition(false)

  }else if(mm.payload.message) { 
    const mm={ 
      userid:userid, 
      matchid:matchid
    }
 const ss=dispatch(getCartServerid(mm)) 
 console.log(ss)
  navi('/confirm')  
   
  }
}  
const editbook=(e)=>{ 
  dispatch(update(e)) 
  navi('/editview')
}
const another=()=>{ 
  navi('/')
  } 
  return ( <div className='box'>{position?       
    <Card style={{backgroundColor:"beige"}}>  
    <br/>
    <Card.Body style={{display:"grid",justifyContent:'space-around'}} >
    
     <Card.Header>{cartlistselected.team}</Card.Header>
     <Card.Header>{cartlistselected.venue}</Card.Header>
     <Card.Header>{cartlistselected.ticketclass}</Card.Header>   
    <Card.Header>{cartlistselected.Numofticket}</Card.Header>  
    <br/>
    <Button onClick={another}> cancel</Button> <br/>
    <Button onClick={confirmbook}>Book</Button>  <br/>
    <Button onClick={()=>editbook(cartlistselected)}>Edit</Button><br/>
    </Card.Body>
    
    </Card>:<h1>{error}</h1>}
    </div>
  )
}

export default Viewcart