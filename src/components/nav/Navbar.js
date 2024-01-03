
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
export const BasicExample=()=>{   
     const [action,setAction]=useState(true) 
     const [item,setItem]=useState(true)   
     const [acti,setAct]=useState(true) 
     
    // const [items,setItems]=useState(true)
     let{error,act}=useSelector(state=>state.user)  
     const{errors}=useSelector(state=>state.ticket) 
    // const[act,setAct]=useState()   
  useEffect(()=>{   
 
    if(act===true){  
      
      setAct(false) 
      
    } 
    if(errors.length===12){ 
       setAction(true)   
     localStorage.clear(); 
       
       } 
       if(error===""){ 
       setAction(false)  
        } 
        
  },[error,errors,act])
   
    
 console.log(errors.length)
 console.log(action)
 
const navi=useNavigate()  

 
  
 
const home=()=>{ 
  navi('/')
}
const logout=()=>{ 
  localStorage.clear(); 
  setAction(true)
  navi('/')
}  
const profile=()=>{ 
 //const userid= localStorage.getItem('id') 
 navi('/user')
} 
const cart=()=>{ 
  navi('/cartlistuser')
} 
const admin=()=>{  
 
  setItem(false)  
 
  navi('/mlogin')
}   
const logoutuser=()=>{   
  
  
 setAct(true) 
 setAction(true) 
 setItem(true)
 navi('/')  
  localStorage.clear() 
  window.location.reload();
}
const cartlistuser=()=>{ 
  navi('/cartuser')
}

  return (<>{acti?<>{item?
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ticket-Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={home}>Home</Nav.Link>  

             
            {action? <><Nav.Link  href="/login">Signin</Nav.Link>  <Nav.Link href="/add">signup</Nav.Link> <Nav.Link onClick={admin}>admin</Nav.Link>  </> : 
            <> <Nav.Link onClick={logout} >Signout</Nav.Link>  
            <Nav.Link onClick={cart} >cart</Nav.Link> 
             <Nav.Link onClick={profile}>profile</Nav.Link>  
             
             </>}
              
           
            
           
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>: <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ticket-Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
         
            </Nav>
        </Navbar.Collapse>
      </Container></Navbar>}  </> 
      
      : <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ticket-Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <Nav.Link onClick={logoutuser} >Signout</Nav.Link> 
             <Nav.Link onClick={cartlistuser}>cart user</Nav.Link>  
             <Nav.Link href='/userdisplay'>user list</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
      </Container></Navbar>}
      
      </>



  );
}

export default BasicExample;