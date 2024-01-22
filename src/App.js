
import './App.css'; 
import Listuser from "./components/user/listofofuser" 
import Add from "./components/user/add"  
import Update from './components/user/update'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'; 
import Listofmatch from './components/match/listofmatch'; 
import Ticketselect from './components/viewcart/ticketselect'; 
import ViewSingleCart from "./components/viewcart/viewcart"; 
import Confirmbooking  from "./components/viewcart/confirmbooking" 
import Editview from "./components/viewcart/editselected" 
import Login from './components/user/login';
import Navbar from './components/nav/Navbar'
import Userprofile from './components/user/userprofile'; 
import Usercart from './components/viewcart/usercart'
import Usedisplay from './owner/Usedisplay'; 
import Merchant from './owner/merchantlogin'
import CartUser from './owner/cartUser'; 
import Footer from './components/nav/Footer';
function App() {
  return (
    
    
    
    
    <BrowserRouter>  
    <Navbar/>
    <Routes> 
    <Route exact path='/add'  element={ <Add/>}/>  
    <Route exact path='/view' element={<Listuser/>}/> 
    <Route exact path='/'element={<Listofmatch/>}/>
    <Route exact path='/update' element={<Update/>}/> 
    <Route exact path='/ticketselect'element={<Ticketselect/>}/>  
    <Route exact path='/cart' element={<ViewSingleCart/>}/> 
    <Route exact path='/confirm' element={<Confirmbooking/>}/>  
    <Route exact path='/editview' element={<Editview/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/user' element={<Userprofile/>}/> 
    <Route exact path='/cartlistuser' element={<Usercart/>}/>  
    <Route exact path='/userdisplay' element={<Usedisplay/>}/>  
    <Route exact path='/mlogin' element={<Merchant/>}/> 
    <Route exact path='/cartuser' element={<CartUser/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter>
    
  
  );
}

export default App;
