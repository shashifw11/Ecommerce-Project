
import {useState, useEffect} from "react" ; 
import "./checkout.css" 
import axios from "axios" ;
import { useAlert } from "react-alert"; 
import {Link} from "react-router-dom" ; 
import Button from '@material-ui/core/Button';
import {useRef} from "react" ;  
import {useNavigate} from "react-router-dom"



export const Checkout=()=>{  

    const alert = useAlert()
    const navigate = useNavigate();

    const [show , setShow] = useState(false) ; 
    
    const [form , setForm] = useState({
    FullName : "" , 
    Email : "" , 
    Address : "" , 
    Contact : "" , 
})  

    const handleChange=(e)=>{ 
          const {name} = e.target ; 
          setForm({...form , [name] : e.target.value})   
            //setShow(false) ;   /// whenever we fiil the input at till show is in false condition only show become tru when we click the button again it become false when we again filling the form ...
        }   


  const FullName = useRef(null) ; 
  const Email    = useRef(null) ; 
  const Address  = useRef(null) ; 
  const Contact  = useRef(null) ; 
   
const checkInput=()=>{
  if(FullName.current.value === ""){
    alert.success("Please fill the form")  
     } else if(Email.current.value  === ""){
      alert.success("fill the Email") ; 
     } else if(Address.current.value  === ""){
      alert.success("fill the Address") ; 
     } else if(Contact.current.value  === ""){
      alert.success("fill the Contact") ; 
     } else {
       setShow(true) ;   
       axios.post("http://localhost:8080/Checkout",form).then(alert.success("Checkout Done")).then(setShow(false)).then(navigate("/payment"))
       .catch((err)=>{
           console.log(err) ; 
       }) ; 
     }
  }

    return (
        <div style = {{ width : "30%" , margin : "auto" , textAlign : "left" , marginTop : "2%" , background : ""}}>
  <form className = "form" onSubmit={(e)=>{e.preventDefault()}}>
  
    <label className = "label">Full Name</label>
    <input className = "input" ref = {FullName} name = "FullName" onChange = {handleChange} type="text" placeholder="Enter Name" autoComplete="off" />
  
  
  <label className = "label">Email</label>
    <input className= "input"  ref = {Email} name = "Email" onChange = {handleChange} type="email" placeholder="Enter email" autoComplete="off"/>
  
  
    <label className = "label">Place of delivery</label>
    <input className= "input"    ref = {Address} name = "Address" onChange = {handleChange} type="text" placeholder="Enter Address"  autoComplete="off"/>
  
 
    <label className = "label">Contact Detail</label>
    <input className= "input"   ref = {Contact} name = "Contact" onChange = {handleChange} type="Number" placeholder="Enter mobile number" autoComplete="off" />
  
  {/* <input onClick = {()=>{
       axios.post("http://localhost:8080/Checkout",form).then(alert.success("Checkout Done"))
           .catch((err)=>{
               console.log(err) ; 
           }) ; 
  }}className = "submit" type = "submit" value = "Payment"/>  */} 

   
</form>  

{  show ? (

<Link to = "/payment"><Button className = "submit" variant="contained" color="secondary" 
    // onClick = {()=>{
    //    axios.post("http://localhost:8080/Checkout",form).then(alert.success("Checkout Done")).then(setShow(false))
    //        .catch((err)=>{
    //            console.log(err) ;  }) ; }}

            style = {{  marginTop : "20px" , float : "right",width : "50%" ,  padding : "8px" }} >
  Go to Payment
</Button></Link>
 )
 : <Button className = "submit" variant="contained" color="secondary" onClick = {()=>{ 
            checkInput() ; 
                
     }} style = {{  marginTop : "20px" , float : "right",width : "50%" ,  padding : "8px" }} >
Go to Payment
</Button>} 
        </div>
    )
}

