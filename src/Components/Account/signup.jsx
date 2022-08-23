import "./signin.css"
import Button from '@material-ui/core/Button';
import {Link , useNavigate} from "react-router-dom" ; 
import {useState,useEffect} from "react" ; 
export const SignUP = ()=>{

   const navigate = useNavigate() ; 

  const [users , setUsers] = useState({
        
         email : "" , 
         password : "" , 
       
  }) 
    const [errors , setErrors] = useState({}) ; 
    const [submit , setSubmit] = useState(false) ; 
    const [get , setGet] = useState(false);
    
    // console.log(errors)  ; 

  const handleChange = (e)=>{
      const {name} = e.target ; 
      setUsers({...users , [name] : e.target.value})
        
    } 
  
   const handleSubmit = () => {
       setErrors(validate(users))     /// errors update by setErrors and that will recive by validate in return erros
       setSubmit(true)
       PostData()
      } 


      const PostData = async()=>{
      //  if(Object.keys(errors).length === 0 && submit){
        
          const {email , password} = users 
          const res =  await fetch("https://backendsasi1.herokuapp.com/register" , {
            //"proxy" : "http://localhost:2345", 
            method : "POST" , 
            headers : {
             "Content-Type" : "application/json"
            } , 
            body : JSON.stringify({email , password})
          })

          const data = await res.json() ;
            
            if(res.status === 400 ||  !data ){
                     window.alert("User Already Registred") ; 
                       console.log("Invalied Registration") 
                      
            } else{
              window.alert("Registration Sucessfull");
              setGet(true);
              console.log("Sucessful Registration");
              navigate("/login");
          //  }
        }
          
         
     }

   useEffect(()=>{
    if(Object.keys(errors).length === 0 && submit){
      console.log(users)
    }

},[errors]);

   const validate = (users)=>{
        const errors = {} ; 
        const reges =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 

        if(!users.email){
          errors.email = "This is not valid Email"
        } else if(!reges.test(users.email)){
          errors.email = "Invalid Email formate"
        } 
        if(!users.password){
          errors.password = "This is not valid Password"
        } else if(users.password.length<4){
          errors.password = "Password must be more than 4 character"
        } else if(users.password.length > 8){
          errors.password = "Password must be less than 8 character"
        }
        
         return errors
     }

    return (
      <>
       
       { Object.keys(errors).length === 0 && get ? (<div style = {{fontSize : "30px" ,  color: "#64fe00"}}>Account created successfully</div>) : (<h3 style = {{color: "#1f80e0"}}>Create Account</h3>)}
        <div className="signup">
          
          <form onSubmit = {(e)=>{e.preventDefault()}}>
           
            <label>Email</label><br/>
            <input onChange = {handleChange}  name = "email" type = "email" placeholder = "Enter email"/><br/>
            <p className = "ers">{errors.email}</p>
            <label>Password</label><br/>
            <input onChange = {handleChange}  name = "password" type = "password" placeholder = "password"/><br/>
            <p className = "ers">{errors.password}</p>
           
          </form>
          <Button  onClick = {handleSubmit} style = {{ marginTop : "10px" , width :"250px"}} variant="contained" color="primary" disableElevation>
      create Account
</Button>   
<p>or</p> 
<Link  style = {{ textDecoration : "none"}} to = "/login">user already registred</Link>
        </div>
        </>
   )
}