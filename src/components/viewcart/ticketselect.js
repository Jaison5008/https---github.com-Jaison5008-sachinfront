import React, {  useEffect, useState } from 'react'
import{useDispatch, useSelector} from'react-redux'  
import {  useNavigate } from 'react-router-dom' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { selected } from '../../Slice/cartslice' 
import Card from 'react-bootstrap/Card'
import { getTicketServer } from '../../Slice/ticketslice' 
import '../../App.css'; 
const Ticketselect = () => {   
  

const {selectedmatchlist}=useSelector(state=>state.match) 
const {errors,ticketlist}=useSelector(state=>state.ticket)  
 console.log(ticketlist)
const[Numofticket,setNumberA]=useState();   
const [ticketclass,setSelected]=useState('');

const matchid=selectedmatchlist._id;  
const venue=selectedmatchlist.venue; 
const team=selectedmatchlist.teams;  
const dispatch=useDispatch()
useEffect(()=>{ dispatch(getTicketServer())},[dispatch])
const userid=localStorage.getItem('id')


 

const navi=useNavigate()


const addingfinal=(e)=>{   
   e.preventDefault()  
   if(matchid&&userid&&team&&venue&&ticketclass&&(Numofticket>0)){
   
    dispatch(selected({matchid,userid,team,venue,ticketclass,Numofticket}))
    navi('/cart')}
    }
  
    

  return ( 
    < div className='box'>{!errors?<>
    
{!userid?<h1>pleaselogin/ signup</h1>:< Card style={{width :'23rem',display:"flex",justifyContent:'center',alignItems:"center"}}> 
        <Form >
          {ticketlist.map((item)=><div key={item._id}>
        <div className="form-check"  >
  <input className="form-check-input"  onClick={(e)=>setSelected(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault1"value={item.classA}/>
  <label className="form-check-label" >
    {item.classA}
  </label>
</div>
<div className="form-check"  >
  <input className="form-check-input" onClick={(e)=>setSelected(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={item.classB}/>
  <label className="form-check-label" >
    {item.classB}
  </label>  
  </div></div>
 
)}<br/>
          <div className="form-group"> 
         
    <label >select ticket count</label>
    <select style={{width:'200px'}} className="form-control" id="exampleFormControlSelect1" value={Numofticket}
    onChange={(e)=>setNumberA(e.target.value)}> 
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>  <br/>
   <div style={{padding:"5px"}}>
    <Button  onClick={addingfinal}>Book</Button>  
    </div> 
    <div> 
    

    </div>
  </div> 

</Form>
</Card>} </>:<h1>{errors}</h1>}

</div>
  )
} 
export default Ticketselect
