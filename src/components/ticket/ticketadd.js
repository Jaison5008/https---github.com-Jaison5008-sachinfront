import React, {  useState } from "react"; 
 import { useDispatch } from "react-redux"; 
 import {addTicket, addTicketServer} from '../../Slice/ticketslice'



function Ticketadd() { 
    const [ticketClassA,setTicketclassA]=useState('') 
    const [ticketClassB,setTicketclassB]=useState('') 
    //const[ticketclassC,setTicketclassC]=useState('')  
    const dispatch=useDispatch()
    const addTicketclass=()=>{ 
     dispatch(addTicketServer({ticketClassA,ticketClassB}))
    }
  return (
    <div>  
        <form> 
         <input placeholder="classA" value={ticketClassA} onChange={()=>setTicketclassA(e.target.value)} />
         <input placeholder="classB" value={ticketClassB} onChange={()=>setTicketclassB(e.target.value)} />  

        
         <button onClick={addTicketclass}>Ticketclass</button>

        </form>

    </div> 
  )
}

export default Ticketadd


