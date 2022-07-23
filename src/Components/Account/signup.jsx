import "./signin.css"
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom" ; 
import {useState,useEffect} from "react" ; 
export const SignUP = ()=>{

  const [users , setUsers] = useState({
         Name : "" , 
         Email : "" , 
         Password : "" , 
         Re_Password : "" , 
  }) 
    const [errors , setErrors] = useState({}) ; 
    const [submit , setSubmit] = useState(false) ; 
    
    // console.log(errors)  ; 

  const handleChange = (e)=>{
      const {name} = e.target ; 
      setUsers({...users , [name] : e.target.value})
        
    } 
  
   const handleSubmit = () => {
       setErrors(validate(users))     /// errors update by setErrors and that will recive by validate in return erros
       setSubmit(true)
      } 

   useEffect(()=>{
    if(Object.keys(errors).length === 0 && submit){
      console.log(users)
    }

},[errors]);

   const validate = (users)=>{
        const errors = {} ; 
        const reges =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 

        if(!users.Name){
          errors.Name = "This is not valid Name"
        }
        if(!users.Email){
          errors.Email = "This is not valid Email"
        } else if(!reges.test(users.Email)){
          errors.Email = "Invalid Email formate"
        } 
        if(!users.Password){
          errors.Password = "This is not valid Password"
        } else if(users.Password.length<4){
          errors.Password = "Password must be more than 4 character"
        } else if(users.Password.length > 8){
          errors.Password = "Password must be less than 8 character"
        }
        if(!users.Re_Password){
          errors.Re_Password = "This is not valid Re-Password"
        }
        else if(users.Re_Password != users.Password ){
          errors.Re_Password = "Re-Password not matched with your password"
        } 
         return errors
     }

    return (
      <>
       
       { Object.keys(errors).length === 0 && submit ? (<div style = {{fontSize : "30px" ,  color: "#64fe00"}}>Account created successfully</div>) : (<h3 style = {{color: "#1f80e0"}}>Create Account</h3>)}
        <div className="signup">
          
          <form onSubmit = {(e)=>{e.preventDefault()}}>
            <label>Name</label><br/>
            <input   onChange = {handleChange} name = "Name" type = "text" placeholder = "Enter Name"/><br/>
            <p className = "ers">{errors.Name}</p>
            <label>Email</label><br/>
            <input onChange = {handleChange}  name = "Email" type = "email" placeholder = "Enter email"/><br/>
            <p className = "ers">{errors.Email}</p>
            <label>Password</label><br/>
            <input onChange = {handleChange}  name = "Password" type = "password" placeholder = "password"/><br/>
            <p className = "ers">{errors.Password}</p>
            <label>Re-Password</label><br/>
            <input onChange = {handleChange} name = "Re_Password" type = "password" placeholder = "Re-Enter password"/><br/>
            <p className = "ers">{errors.Re_Password}</p>
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