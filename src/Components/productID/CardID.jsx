import {useContext} from "react" ; 
import { CartContext } from "../../context/CartContext";
import axios from "axios" ; 

import { useAlert } from "react-alert";

import {Link} from "react-router-dom"
import {useState} from "react"
import "./CardID.css"



export const CardID = ({id,description,category,image,price,title})=>{
     
   const alert = useAlert()
   
  const [counter , setCounter] = useState(0)
  const [show , setShow] = useState(false) ; 

   const [obj , setObj] = useState({
       id : id , 
       price : price , 
       image : image , 
       category : category , 
       title : title , 
       description : description , 
       item_count : counter,
    })  
      
     
      
  const {handleChange} = useContext(CartContext) ; 
       


    const myfun=(value)=>{ 
      setCounter((prev)=>prev+value) 
         obj.item_count = counter+1 
         
      if(counter<=0){
        setCounter(1) ; 
        obj.item_count =  1
        
        } 
     } 

    return (
        
<div id = "container" className="card" >
    <div id = "img" className= "imgdiv">
    <img id = "img-top" src={image}  className="card-img-top" alt=""/>
    </div>
  
  <div id = "c-body" className="card-body">
     <p className="card-text">{category}</p>
     <p className="card-title">{title}</p>
     <p className="card-title">{description}</p>
     <p style = {{fontWeight:"bolder" , color : "gray"}} className="card-text"> Price: $ {price} </p> 

    <div id = "link" className = "link">
      <div>
         <button className = "min" onClick={()=>myfun(-1)}>-</button><span style = {{ fontWeight : "bolder" ,  color : "red"}}>{counter}</span><button className = "max" onClick={()=>myfun(1)}>+</button>
      </div>
      <div>
      <button  to = "/cart" 
            style = {{ border : "none" , backgroundColor: "tomato" , fontWeight : "bolder" , width : "210px" , padding : "10px"}} 
            className="btn btn-primary"

           onClick={()=>{
              {show ? setShow(false) : setShow(true)}
            handleChange({obj,counter,show})  
            
            axios.post("https://ecomday.herokuapp.com/Cart_item",obj).then(alert.success("item added to Cart"))
                       //https://ecomday.herokuapp.com/Cart_item
                      //https://fakestoreapi.com/carts
                      //http://localhost:8080/Cart_item"
            .catch((error)=>{
               console.log(error) ; 
             })  
            
          }}> Add To Cart</button>
    </div>
   
   </div>
  </div>

   

</div>
  
    )
}

// {/* <button
// onClick={() => {
//   alert.success("It's ok now!");
// }}
// >
// Success!
// </button> */}
//window.alert("Cart Sucessfully Added")
