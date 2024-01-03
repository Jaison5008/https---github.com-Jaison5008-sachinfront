import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 
import Card from "react-bootstrap/Card" 
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector} from 'react-redux' 
import { getCartServerids } from '../../Slice/cartslice'
const Confirmbooking = () => {  
 const dispatch=useDispatch()
  
  const {cartlistid}=useSelector((state)=>state.cart)   
  console.log(cartlistid)
 useEffect(()=>{ 
    dispatch (getCartServerids()) 
     
  },[dispatch])
 const navi=useNavigate()
 const anotherticket=()=>{   
 // event.preventDefault()
  navi('/')

 }
 
 
  return (<> 
  <Card style={{display:'column',justifyContent:'center',alignItems:'center'}}> 
      <Card.Header >booking sucess</Card.Header> <br/> 
      <Card.Body>
   {/*<Button onClick={anothermatch}>book another match</Button>*/}  
    
      <Card.Text>{cartlistid.team}</Card.Text> 
      <Card.Text>{cartlistid.venue} </Card.Text>  
      <Card.Text> {cartlistid.Numofticket}</Card.Text>  
      <Card.Text> {cartlistid.ticketclass}</Card.Text>  
      <br/> 
      <Button onClick={()=>anotherticket()}> book another match</Button>
    
    
    </Card.Body>
    </Card>  
    </>
  )
}

export default Confirmbooking;