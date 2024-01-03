import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMatchServer, selected } from '../../Slice/matchslice'
import { useNavigate } from 'react-router-dom'
//import { getTicketServer } from '../../Slice/ticketslice'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
const Listofmatch = () => {
  const navi = useNavigate()
  const dispatch = useDispatch()
  const [position, setPostition] = useState(true)
  const { matchlist } = useSelector((state) => state.match)

     useEffect(() => { dispatch(getMatchServer())},[dispatch])


  const selecteditem = (e) => {
    // e.preventDefault()   
    const userid = localStorage.getItem('id') 
    //const token=localStorage.getItem('token')
    if (userid) {
      dispatch(selected(e))
      //dispatch(getTicketServer())
      navi('/ticketselect')
    }
    else {
      setPostition(false)
    }

  }

  return (<>
    {!position ? <h1>for ticket booking pls login</h1> : ""}
    <div style={{ display: "flex", margin: "30px", flexWrap: "wrap", justifyContent: "space-between", width: "75%" }}>
      {matchlist.map((item) =>
        <Card border="primary" style={{ width: '18rem', display: "flex", marginBottom: "50px" }} key={item._id}>
          <Card.Header>{item.teams}</Card.Header>
          <Card.Body>
            <Card.Title>{item.venue}</Card.Title>
            <Card.Text>
              {item.time}
            </Card.Text>
            <Button onClick={() => selecteditem(item)}>book</Button>
          </Card.Body>
        </Card>)}
    </div>
  </>)
}

export default Listofmatch 
