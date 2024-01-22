import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";
const Url='https://sachinback.onrender.com'


export const getCartServer=createAsyncThunk( 'get/cartsetver',async(_,{rejectWithValue})=>{ 
    try{   
        const tokens=  JSON.parse (localStorage.getItem("token")) 
    const response=await axios.get(`${Url}/cart/get`,{headers:{Authorization:`Bearer ${tokens}`}})  
    console.log(response)
    const data =response.data.data
    console.log(data)
     return data
    }catch(error){rejectWithValue({error:"cart get unsucess"})}
} 
)   




export const getCartServerid=createAsyncThunk( 'get/cartsetverid',async(item,{rejectWithValue})=>{ 
    try{  
        
    const response=await axios.get(`${Url}/cart/get/${item.userid}/${item.matchid}`)  
   
    const data =response.data.data
    
     return data
    }catch(error){rejectWithValue({error:"cart getid unsucess"})}
} 
)     

export const getCartServerids=createAsyncThunk( 'get/cartsetverids',async(_,{rejectWithValue})=>{ 
    try{  
        
     const id=JSON.parse(localStorage.getItem('id'))
    const response=await axios.get(`${Url}/cart/geting/${id}`)  
   console.log(response)
    const data =response.data.data
    console.log(data)
     return data
    }catch(error){rejectWithValue({error:"cart getid unsucesful"})}
} 
)    





export const addCartServer=createAsyncThunk( 'add/cartsetver',async(cart,{rejectWithValue})=>{ 
    try{ 
    const response=await axios.post(`${Url}/cart/post`,cart)   
    
    const data =response.data
    
        return data 
    console.log(data)
    }catch(error){ 
       
        return rejectWithValue({error:error.response.data.error})}

}
) 


const initialState={ 
  cartlist:[] ,
  cartlistselected:{} ,  
  cartlistupdate:{}, 
  cartlistid:[], 
  getcart:[],
  error:'' ,
  isLoading:false

} 


const cartSlice=createSlice({ 
name:'cart', 
initialState, 
reducers:{  
   selected:(state,action)=>{ 
  state.cartlistselected=action.payload
   }, update:(state,action)=>{ 
    state.cartlistupdate=action.payload
   } , 
   updateedit:(state,action)=>{  
   state.cartlistselected =action.payload

   }
},
extraReducers:(builder)=>{
    builder 
    .addCase(getCartServer.pending,(state)=>{ 
        state.isLoading=true;
        }) 
    .addCase(getCartServer.fulfilled,(state,action)=>{    
        console.log(action)
        state.isLoading=false;
        state.cartlist=(action.payload);
        state.error=''
        

    }) 
     .addCase(getCartServer.rejected,(state,action)=>{  
        state.isLoading=false;
        state.cartlist=[];
        state.error=action.payload.error
        
        
    })  
     .addCase(addCartServer.pending,(state)=>{ 
        state.isLoading=true;
        }) 
    .addCase(addCartServer.fulfilled,(state,action)=>{    
        console.log(action)
        state.isLoading=false; 
        state.cartlist.push(action.payload)
        }) 
     .addCase(addCartServer.rejected,(state,action)=>{  
        state.isLoading=false;
        state.cartlist=[]; 
       console.log(action)
        state.error=action.payload.error
        })  
         .addCase(getCartServerid.pending,(state)=>{ 
            state.isLoading=true;
            }) 
        .addCase(getCartServerid.fulfilled,(state,action)=>{     
            console.log(action)
             state.isLoading=false;   
             state.cartlistid=action.payload 
             
             state.error='';
        }) 
        .addCase(getCartServerid.rejected,(state,action)=>{ 
          state.isLoading=false; 
          state.cartlistid={}; 
          state.error=' canot get'
        })
        .addCase(getCartServerids.pending,(state)=>{ 
            state.isLoading=true;
            }) 
        .addCase(getCartServerids.fulfilled,(state,action)=>{    
            console.log(action) 
             state.isLoading=false;   
             state.getcart=action.payload;
             state.error='';
        }) 
        .addCase(getCartServerids.rejected,(state,action)=>{ 
          state.isLoading=false; 
          state.getcart=[]; 
          state.error=' canot get'
        })
        
    
}


})

export const{selected,update,updateedit}=cartSlice.actions;
export default cartSlice.reducer;
