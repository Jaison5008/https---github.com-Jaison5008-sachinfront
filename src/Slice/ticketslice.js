import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";
const Url='https://sachinback.onrender.com'

export const getTicketServer=createAsyncThunk( 'get/ticketserver',async(_,{rejectWithValue})=>{ 
    try{  
  const tokens=  JSON.parse (localStorage.getItem("token")) 
  console.log(tokens)
  //request.headers.autherization=tokens
   const response=await axios.get(`${Url}/ticket/get`,{headers:{Authorization:`Bearer ${tokens}`}})  
    
     
    const data =response.data.data
    
     return data  
     
      }catch(error){ 
        return rejectWithValue({error:error.response.data.error})}
    })

export const addTicketServer=createAsyncThunk( 'add/ticketserver',async(ticket,{rejectWithValue})=>{ 
    try{ 
    const response=await axios.post(`${Url}/ticket/post`,ticket)  
    console.log(response)
    const data =response.data.data
    console.log(data)
     return data
    }catch(error){rejectWithValue({error:"ticket add unsucess"})}
} 
)
const initialState={ 
  ticketlist:[],
  
  errors:'' ,
  isLoading:false

} 


const ticketSlice=createSlice({ 
name:'tickets', 
initialState, 
reducers:{  
   
},extraReducers:(builder)=>{  
    builder 
    .addCase(addTicketServer.pending,(state)=>{ 
    state.isLoading=true; 
    
    })
    .addCase(addTicketServer.fulfilled,(state,action)=>{   
      console.log(action)
      state.isLoading=false;  
      state.errors='';  
      state.ticketlist=action.payload;
      
    })
    .addCase(addTicketServer.rejected,(state,action)=>{  
      console.log(action)
        state.isLoading=false; 
        state.errors=action.error.message; 
        state.ticketlist={};
    }) 
    .addCase(getTicketServer.pending,(state)=>{ 
      state.isLoading=true; 
      
      })
      .addCase(getTicketServer.fulfilled,(state,action)=>{  
        state.isLoading=false; 
        state.errors=''; 
        state.ticketlist=action.payload
  
      })
      .addCase(getTicketServer.rejected,(state,action)=>{  
        console.log(action)
          state.isLoading=false;  
          console.log(action.payload.error)
          state.errors=action.payload.error;  
          state.ticketlist=[];
      }) 
  
    }

})

//export const{selected}=ticketSlice.actions;
export default ticketSlice.reducer;
