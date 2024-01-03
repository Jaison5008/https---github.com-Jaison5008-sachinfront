import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const ListGroupWithHeaderExample = () => { 
const {getcart}=useSelector(state=>state.cart)  
console.log(getcart)

  return ( <div style={{display:"flex",margin:"10px", flexWrap:"wrap",justifyContent:"space-between",width:"75%"}} > 
  {getcart===null?[]:getcart.map((item,index)=><div key={item._id} > 
  <Card style={{ width: '18rem',marginBottom:'2rem'}}>
      <Card.Header>Game {index + 1}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{item.team}</ListGroup.Item>
        <ListGroup.Item>{item.venue}</ListGroup.Item> 
        <ListGroup.Item>{item.ticketclass}</ListGroup.Item>
        <ListGroup.Item>{item.Numofticket}</ListGroup.Item>
      </ListGroup>
    </Card>
     
   </div>
   )}
    
 </div> )
} 
export default ListGroupWithHeaderExample;


