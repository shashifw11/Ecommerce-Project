import Form from 'react-bootstrap/Form'
import "./login.css"
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom" ; 
import {useState,useEffect} from "react"; 

export const Login = ()=>{

  const [users , setUser] = useState({
        Email : "" , 
        Password : "" , 
    }) 

  const [errors,setErrors] = useState({}) ; 
  const [submit,setSubmit] = useState(false)

     

    const handleChange =(e)=>{
         const {name} = e.target ; 
         setUser({...users , [name] : e.target.value})
        
    }
    
    const handleSubmit=()=>{
      setErrors(validate(users))
       setSubmit(true)
    }
  

     useEffect(()=>{
           if(Object.keys(errors).length === 0 && submit){
             console.log(users)
           }

      },[errors]);

    const validate=(values)=>{
         const errors = {} ; 
         const reges =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       if(!values.Email){
         errors.Email = "This is not valid email"
       }else if(!reges.test(values.Email)){
        errors.Email = "This is not valid email formate"
      }
       if(!values.Password){
         errors.Password = "This is not valid password" ; 
       }else if(values.Password.length < 4){
        errors.Password = "password must be more than 4 character" ; 
       }else if(values.Password.length > 8){
          errors.Password = "password must be less than 8 character" ; 
       }
          return errors  ; 
    } 

    return ( <>
     {Object.keys(errors).length === 0 && submit ? <div style = {{fontSize : "30px" ,  color : "red"}}>Signed in sucessfully</div> : (<h1 className = "h1">Login</h1>)} 
        
        <div className = "container">
          <form onSubmit={(e)=>{
                  e.preventDefault() ; 
          }}> 
          
              <label>Email </label><br/>
              <input onChange={handleChange} name = "Email" type = "email" placeholder='Enter email'/><br/>
              <p>{errors.Email}</p>
              <label>Password</label><br/>
              <input onChange={handleChange} name = "Password" type = "password" placeholder = "Enter password"/>
              <p>{ errors.Password}</p>
          </form> 
          <Button onClick = {handleSubmit} style = {{ padding : "10px" , width : "90%" , marginTop : "20px"}} variant="contained" color="primary" disableElevation>
  Login
</Button> 
<p style = {{textAlign : "center" , marginTop : "10px" , fontWeight : "bolder"}}>or</p>
<Link style = {{textDecoration : "none"}} to = "/signup"><Button  style = {{ padding : "10px"  , width : "90%" ,   marginBottom : "10px"}} variant="contained" color="primary" disableElevation>
  Rigester
</Button></Link>
        </div>
       </>
    )
}

//https://www.youtube.com/watch?v=fWXk2YC8gXI&t=363s
//https://www.youtube.com/watch?v=lca2MXZnlmw
//https://www.youtube.com/watch?v=Xc_MPV9EtNs