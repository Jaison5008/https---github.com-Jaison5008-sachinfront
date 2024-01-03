import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";
const Url='http://localhost:7000'

export const getMatchServer=createAsyncThunk( 'get/matchsetver',async(_,{rejectWithValue})=>{ 
    try{ 
    const response=await axios.get(`${Url}/match/get`)  
    console.log(response)
    const data =response.data.data
    console.log(data)
     return data
    }catch(error){rejectWithValue({error:"match get unsucess"})}
} 
) 



const initialState={ 
  matchlist:[] ,
  selectedmatchlist:{} , 
  error:'' ,
  isLoading:false

} 


const matchesSlice=createSlice({ 
name:'matches', 
initialState, 
reducers:{  
    selected:(state,action)=>{ 
        state.selectedmatchlist=action.payload
    }
},extraReducers:(builder)=>{ 
    builder 
    .addCase(getMatchServer.pending,(state,action)=>{ 
        state.isLoading=true
        

    }) 
    .addCase(getMatchServer.fulfilled,(state,action)=>{    
        console.log(action)
        state.isLoading=false;
        state.matchlist=action.payload;
        state.error=''
        

    }) 
     .addCase(getMatchServer.rejected,(state,action)=>{  
        state.isLoading=false;
        state.matchlist=[];
        state.error=action.payload.error
        
        
    })  
    
}



})

export const{selected}=matchesSlice.actions;
export default matchesSlice.reducer;
