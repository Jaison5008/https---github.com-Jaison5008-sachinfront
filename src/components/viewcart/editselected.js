import React, { useEffect, useState } from 'react' 
import { useSelector ,useDispatch} from 'react-redux';
import{updateedit} from '../../Slice/cartslice'
import { useNavigate } from 'react-router-dom'; 
import Form from "react-bootstrap/Form" 
import Card from "react-bootstrap/Card" 
import Button from 'react-bootstrap/Button';
const Editselected = () => {    
const dispatch=useDispatch() 
const navi=useNavigate()
//const {selectedmatchlist}=useSelector(state=>state.match) 
const {ticketlist}=useSelector(state=>state.ticket)  
    const {cartlistupdate}=useSelector(state=>state.cart)
    const[matchid,setMatchid]=useState(''); 
    const[userid,setUserid]=useState(''); 
    const[team,setTeam]=useState('');  
    const[venue,setVenue]=useState('');  
    const[ticketclass,setTicketclass]=useState('');  
    const[Numofticket,setNumofticket]=useState(''); 
    useEffect(()=>{ 
    setMatchid(cartlistupdate.matchid);
    setUserid(cartlistupdate.userid);
    setTeam(cartlistupdate.team); 
    setVenue(cartlistupdate.venue);
    setTicketclass(cartlistupdate.ticketclass);  
    setNumofticket(cartlistupdate.Numofticket);
    },[]) 
    const Update=(e)=>{  
     e.preventDefault() 
     if(Numofticket>0){
     dispatch(updateedit({matchid,userid,team,venue,ticketclass,Numofticket}))  
     }
     navi('/cart')
    }

  return (
    <Card style={{justifyContent:"center",alignItems:"center"}}> 
        
    
    <Form style= {{ width: '18rem',display:"column"}}>    
      {ticketlist.map((item)=><div key={item._id}>
    <div className="form-check" >
<input className="form-check-input" type="radio"onClick={(e)=>setTicketclass(e.target.value)} name="flexRadioDefault" id="flexRadioDefault1"value={item.classA}/>
<label className="form-check-label">
{item.classA}
</label>
</div>
<div className="form-check">
<input className="form-check-input" onClick={(e)=>setTicketclass(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={item.classB}/>
<label className="form-check-label" >
{item.classB}
</label>  
</div></div>

)}<br/>
      <div className="form-group"> 
     
<label >select ticket count</label>
<select className="form-control" id="exampleFormControlSelect1" value={Numofticket}
onChange={(e)=>setNumofticket(e.target.value)}> 
  <option>0</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>  
<br/>
<Button  onClick={Update}>Update</Button>  

</div> 

</Form>
</Card>
  )
}

export default Editselected