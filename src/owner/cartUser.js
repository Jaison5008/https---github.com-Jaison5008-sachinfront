import React, { useEffect } from 'react'
import { getCartServer } from '../Slice/cartslice' 
import { useDispatch, useSelector } from 'react-redux' 
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import  '../App.css'
const CartUser = () => {  
    const{cartlist}=useSelector((state)=>state.cart)  
    console.log(cartlist)
    const dispatch=useDispatch();  
    useEffect(()=>{ 
     dispatch(getCartServer())
    },[dispatch])
  return ( <div className='box'>
  <div style={{display:"flex",margin:"10px", flexWrap:"wrap",justifyContent:"space-between",width:"75%"}} > 
  {cartlist===null?[]:cartlist.map((item,index)=><div key={item._id} > 
  <Card style={{ width: '18rem',marginBottom:'2rem',backgroundColor:'beige'}}>
      <Card.Header>Game {index + 1}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Team : {item.team}</ListGroup.Item>
        <ListGroup.Item>Venue:{item.venue}</ListGroup.Item> 
        <ListGroup.Item>Class:{item.ticketclass}</ListGroup.Item>
        <ListGroup.Item>Ticket:{item.Numofticket}</ListGroup.Item> 
        <ListGroup.Item>Matchid:{item.matchid}</ListGroup.Item> 
        <ListGroup.Item>Userid:{item.userid}</ListGroup.Item> 
        <ListGroup.Item>Time:{item.createdAt}</ListGroup.Item> 
      </ListGroup>
    </Card>
     
   </div>
   )}
    
 </div></div>
        )}
    
  

export default CartUser