import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react' 
import {useSelector,useDispatch} from "react-redux"
import { deleteUsersThunk,updateselect,getUsersThunk,deleteitem} from '../../Slice/usersSlice'  
import {useNavigate} from'react-router-dom'
//import Table from 'react-bootstrap/Table'; 

function Listofofuser(){     
 
 const navi=useNavigate();
 
 const dispatch=useDispatch();
 
 const {userslist}=useSelector((state)=> state.user);

 useEffect(()=>{ 
  
  dispatch(getUsersThunk())},[])
  
   const selecteditem=(e)=> {  
    
    dispatch(updateselect(e));navi('/update')}; 
   
   
   const delteteditem=(e)=>{dispatch(deleteUsersThunk(e));dispatch(deleteitem(e))};
  
   
   
   

  return ( 

<div> 
{userslist.map((item)=><div key={item._id}> 
<h1> {item.name}  </h1>
 
<Button onClick={()=>selecteditem(item)}> update</Button>  
<br/>
<Button onClick={()=>delteteditem(item)}> delete</Button>  


</div>)}
</div>
   
  
 
  )
}




export default Listofofuser;