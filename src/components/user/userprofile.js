import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Userprofile = () => { 
  const{user}=useSelector(state=>state.user) 
  console.log(user)
  return (<div style={{ display:'flex',justifyContent:'center',margin:'2rem'}}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src='' />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
         {user.email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div> )
}

export default Userprofile 


