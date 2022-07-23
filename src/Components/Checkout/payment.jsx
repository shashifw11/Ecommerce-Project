import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Button from 'react-bootstrap/Button';
import "./payment.css"
import {Link} from "react-router-dom" ; 
import {useState} from "react" ; 
export const Payment=()=> {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
 
   const [details , setDetails] = useState({
       CardNumber : "", 
       ExpDate : "" , 
       Cvv : "" , 
       HolderName : "" , 
       
    }) 

    const handleChange =(e)=>{ 
         //console.log(e.target.name)  ; 
       const {name} = e.target 
       setDetails({...details , [name] : e.target.value})  ; 
       } 
       
  return (
      <div className = "payment">
          <div className = "upper">
              <div>Pay amount</div>
              <div>{675}</div>
          </div>
          
         <div style = {{marginTop : "20px" }}>
          <input  name = "CardNumber" onChange = {handleChange} className = "cardnum" {...getCardNumberProps()} />
          <svg className = "svg" {...getCardImageProps({ images })} />
          </div>
          <div className = "exp">
          <input name = "ExpDate" onChange = {handleChange} {...getExpiryDateProps()} />
          <input  name = "Cvv" onChange = {handleChange}{...getCVCProps()} />
          </div>
          
          <input  name = "HolderName" onChange = {handleChange} className = "holder" placeholder="Card holder Name" />
   
        
         
          {/* <PaymentInputsWrapper className = "num" {...wrapperProps}>
          </PaymentInputsWrapper>  */}
     
    <div className = "lower">
    <Link to = "/cart"><Button style = {{width : "140px "}} variant="outline-danger">Cancel</Button>{" "}</Link>
     <Link to = "/success"><Button marginTop="major-2" type="submit">
     Make Payment
   </Button></Link>
   </div>
   </div>
  );
}  


//https://reactjsexample.com/a-zero-dependency-react-hook-container-to-help-with-payment-card-input-fields/

