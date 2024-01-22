import {createSlice,createAsyncThunk} from "@reduxjs/toolkit" 
import axios from'axios' 

const Url='https://sachinback.onrender.com'


export const getUsersThunk=createAsyncThunk('user/getuserFromServer',
async(_,{rejectWithValue})=>{ 
  try{ 
    const tokens=  JSON.parse (localStorage.getItem("token")) 
  const response=await axios.get(`${Url}/user/get`,{headers:{Authorization:`Bearer ${tokens}`}}) 
   const data=  response.data.users 
   console.log(data)
   return data
  }catch(error){ 
    console.log(error.response.data.error)
return rejectWithValue({error:error.response.data.error})
 }
})     

export const getUsersThunkid=createAsyncThunk('user/getuserFromServerid',
async(ss,{rejectWithValue})=>{  
  //const ss=JSON.parse(userid) 
  console.log(ss)
  try{  
    const response=await axios.get(`${Url}/user/get/${ss}`)   
  console.log(response)
   const data=  response.data.users
   return data
  }catch(error){ 
    console.log(error)
return rejectWithValue({error:error.response.data.error})
}
})    


export const logingetUsersThunk=createAsyncThunk('loginget/getuserFromServer',
async(login,{rejectWithValue})=>{ 
  try{ 
    
  const response=await axios.post(`${Url}/user/login`,login)  
  console.log(response)
   const data=  response.data.message  
   console.log(response.data.message)
   localStorage.setItem ("id",JSON.stringify(response.data.users._id))  
   localStorage.setItem("token",JSON.stringify(response.data.token))
   return data

  }catch(error){ 
    
return rejectWithValue({error:error.response.data.error})

 }

})   
export const merchantlogingetUsersThunk=createAsyncThunk('mloginget/getuserFromServer',
async(login,{rejectWithValue})=>{ 
  try{ 
    console.log(login)
  const response=await axios.post(`${Url}/user/mlogin`,login)  
  console.log(response)
   const data=  response.data.users 
   localStorage.setItem ("id",JSON.stringify(data._id))  
   localStorage.setItem("token",JSON.stringify(response.data.token))
   return data

  }catch(error){ 
    console.log(error)
return rejectWithValue({error:error.response.data.error})

 }

})   



export const addAsynkServer=createAsyncThunk('user/postuserFromServer',
async(use,{rejectWithValue})=>{  
 try{ 
  
const response=await axios.post(`${Url}/user/postsignup`,use); 
return    response.data.message
 
 }
catch(error){    
  //console.log(error.response.data.error)
  return  rejectWithValue({error:error.response.data.error})
  
}
 
}) 


 

export const patchUsersThunk=createAsyncThunk('user/patchuserFromServer',
async(use,{rejectWithValue})=>{ 
  try{
  const response=await axios.patch(`${Url}/user/put/${use._id}`,use) 
 //console.log(response)
    
 const data=  response.data.user
 
  console.log(data)
  return data
 }catch(error){ 
 
 return rejectWithValue({error:error.response.data.error})
 }

})   

export const deleteUsersThunk=createAsyncThunk('user/deleteuserFromServer',
async(use,{rejectWithValue})=>{ 
  try{
  const response=await axios.delete(`${Url}/user/delete/${use._id}`) 
 const data= response.data.message
 return data
  
 }catch(error)  {  
  return rejectWithValue({error:error.response.data.error})
 }
})  

const initialState={ 
  userslist:[], 
  userselect:{},  
  user:{}, 
  merchantlogin:[],
  error:'1', 
  isLoading:false ,
  act:false, 
  userlogin:{}
}    




 export const  userSlice=createSlice({ 

 name:"user", 
 initialState, 
 reducers:{ 
  updateselect:(state,action)=>{ 
     state.userselect=action.payload
  },
 deleteitem:(state,action)=>{ 
  state.userslist=state.userslist.filter(item=>item._id!==action.payload._id)
 }


 }, 
 extraReducers:(builder)=>{  
    builder 
    .addCase(getUsersThunk.pending,(state)=>{ 
    state.isLoading=true; 
    
    })
    .addCase(getUsersThunk.fulfilled,(state,action)=>{   
      console.log(action.meta.requestStatus)
      state.isLoading=false; 
      
      state.userslist=action.payload;
      state.error='';  
      if(action.meta.requestStatus==='fulfilled') {
      state.act= true;
      }else{ 
        state.act=false;
      }
    })
    .addCase(getUsersThunk.rejected,(state,action)=>{  
      console.log(action)
        state.isLoading=false; 
        state.error=action.payload.error; 
        state.userslist=[];
    }) 
    .addCase(addAsynkServer.pending,(state)=>{ 
      state.isLoading=true; 
      
      })
      .addCase(addAsynkServer.fulfilled,(state,action)=>{  
        state.isLoading=false; 
        state.error="false"; 
        state.userslist.push(action.payload);
  
      })
      .addCase(addAsynkServer.rejected,(state,action)=>{  
        console.log(action)
          state.isLoading=false;  
          
          state.error=action.payload.error.error;  
          
      }) 
  
      .addCase(patchUsersThunk.pending,(state)=>{ 
        state.isLoading=true; 
        
        })
        .addCase(patchUsersThunk.fulfilled,(state,action)=>{  
          state.isLoading=false; 
          state.error='';  
          //console.log(action.payload)
          state.userslist=state.userslist.map((item)=>item._id===action.payload._id?action.payload:item)
    
        })
        .addCase(patchUsersThunk.rejected,(state,action)=>{ 
            state.isLoading=false;  
           console.log(action.error.message)
            state.error=action.error.message; 
            
        }) 


        .addCase(deleteUsersThunk.pending,(state)=>{ 
          state.isLoading=true; 
    
          })
          .addCase(deleteUsersThunk.fulfilled,(state,action)=>{  
            state.isLoading=false; 
            state.error=''; 
            state.userslist=state.userslist.filter((item)=>item._id!==action.payload._id)
      
          })
          .addCase(deleteUsersThunk.rejected,(state,action)=>{  
            console.log(action)
              state.isLoading=false;  
              console.log(action.error.message)
              state.error=action.error.message; 
              
          })  
          .addCase(logingetUsersThunk.pending,(state,action)=>{  
                
               state.isLoading=true;  
               
        })
          .addCase(logingetUsersThunk.fulfilled,(state,action)=>{  
            console.log(action)
               state.isLoading=false;  
               state.userlogin=action.payload
               state.error=''; 
               
           })
          .addCase(logingetUsersThunk.rejected,(state,action)=>{  
             console.log(action)
              state.isLoading=false;  
            state.merchantlogin=[];
              state.error=action.payload.error; 
              
          })  
          .addCase(merchantlogingetUsersThunk.pending,(state,action)=>{  
            
            state.isLoading=true;  
            
     })
       .addCase(merchantlogingetUsersThunk.fulfilled,(state,action)=>{  
         console.log(action)
            state.isLoading=false;  
            state.merchantlogin=action.payload
            state.error="2"; 
            
        })
       .addCase(merchantlogingetUsersThunk.rejected,(state,action)=>{  
          console.log(action)
           state.isLoading=false;  
         state.merchantlogin={}
           state.error=action.payload.error; 
           
       }) 
          .addCase(getUsersThunkid.pending,(state)=>{ 
            state.isLoading=true; 
            
            })
            .addCase(getUsersThunkid.fulfilled,(state,action)=>{   
              console.log(action)
              state.isLoading=false; 
              state.error=''; 
              state.user=action.payload;
        
            })
            .addCase(getUsersThunkid.rejected,(state,action)=>{  
              console.log(action)
                state.isLoading=false; 
                state.error=action.error.message; 
                state.userslist={};
            }) 

 }







})   

export const{updateselect,deleteitem}=userSlice.actions;
export default userSlice.reducer;