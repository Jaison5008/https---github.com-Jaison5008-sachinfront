import {configureStore} from "@reduxjs/toolkit" 
import  userreducer from '../Slice/usersSlice'
import  matchreducer from "../Slice/matchslice" 
import  ticketreducer from'../Slice/ticketslice' 
import  cartreducer from "../Slice/cartslice"
 export const Store=configureStore({ 
reducer:{
 user:userreducer, 
 match:matchreducer ,
 ticket:ticketreducer, 
 cart:cartreducer
}
})