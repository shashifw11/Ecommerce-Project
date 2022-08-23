
import "./login.css"
import Button from '@material-ui/core/Button';
import {Link , useNavigate} from "react-router-dom" ; 
import {useState,useEffect} from "react"; 

export const Login = ({handleUser})=>{

  const navigate = useNavigate() ; 

  const [users , setUser] = useState({
        email : "" , 
        password : "" , 
    }) 

  const [errors,setErrors] = useState({}) ; 
  const [submit,setSubmit] = useState(false)
  const [get ,setGet] = useState(false);

     

    const handleChange =(e)=>{
         const {name} = e.target ; 
         setUser({...users , [name] : e.target.value})
        
    }
    
    const handleSubmit=()=>{
      setErrors(validate(users))
       setSubmit(true)
      
       PostData() ; 
    }
    
    const PostData = async()=>{
        
     // if(Object.keys(errors).length === 0 && submit== true){
        //  console.log(users) ; 
        const {email , password} = users 
       const res =  await fetch("https://backendsasi1.herokuapp.com/login" , {
       
         method : "POST" , 
         headers : {
          "Content-Type" : "application/json"
         } , 
         body : JSON.stringify({email , password})
       })

       const data = await res.json() ;
         
         if(res.status === 400 ||  !data ){
              window.alert("Invalied email or Password") ; 
                console.log("Invalied Login") 
                   
         } else{
           window.alert("Login Sucessfull");
           setGet(true);
           handleUser(true) ; 
           console.log("Sucessful Login");
          navigate("/");
     //    }
    
      }
    
    
}

     useEffect( ()=>{
           if(Object.keys(errors).length === 0 && submit== true){
            //  console.log(users) ; 
           }

      },[errors]);

    const validate=(values)=>{
         const errors = {} ; 
         const reges =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       if(!values.email){
         errors.email = "This is not valid email"
       }else if(!reges.test(values.email)){
        errors.email = "This is not valid email formate"
      }
       if(!values.password){
         errors.password = "This is not valid password" ; 
       }else if(values.password.length < 4){
        errors.password = "password must be more than 4 character" ; 
       }else if(values.password.length > 8){
          errors.password = "password must be less than 8 character" ; 
       }
          return errors  ; 
    } 

    return ( <>
     {Object.keys(errors).length === 0 && get ? <div style = {{fontSize : "30px" ,  color : "red"}}>Login Successfull</div> : (<h1 className = "h1">Login</h1>)} 
        
        <div className = "container">
          <form onSubmit={(e)=>{
                  e.preventDefault() ; 
          }}> 
          
              <label>Email </label><br/>
              <input onChange={handleChange} name = "email" type = "email" placeholder='Enter email'/><br/>
              <p>{errors.email}</p>
              <label>Password</label><br/>
              <input onChange={handleChange} name = "password" type = "password" placeholder = "Enter password"/>
              <p>{ errors.password}</p>
          </form> 
          <Button onClick = {handleSubmit} 
          style = {{ padding : "10px" , width : "90%" , marginTop : "25px",   marginRight : "20px",}} variant="contained" color="primary" disableElevation>
              Login
            </Button> 


         <p style = {{textAlign : "center" , marginTop : "10px" , fontWeight : "bolder"}}>or</p>

       <Link style = {{textDecoration : "none"}} 
             to = "/signup">
              <Button  style = {{ padding : "10px"  , width : "90%" , marginRight : "20px" ,   marginBottom : "10px"}} variant="contained" color="primary" disableElevation>
              Rigester
           </Button>
        </Link>
        </div>
       </>
    )
}

