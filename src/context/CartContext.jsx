import {createContext,useState,useRef} from "react" ; 
 import axios from "axios" ;  

export const CartContext = createContext() ; 
  
export const CartContextProvider = ({children})=>{
    const [count , setCount] = useState(0) ; 
    const [item , setItem] = useState([]) ; 
    const [show,setShow] = useState("") ; 
    const [ num , setNum] = useState(0) ;  
     console.log(num) ; 
  const handleChange = (cartItem)=>{  
     setItem(cartItem.obj) ;
    setCount(cartItem.counter)
    setShow(cartItem.show) ;  
   } 

  const CartChange=(num)=>{
    setShow(num)
  }

   return <CartContext.Provider value = {{CartChange , handleChange,count,item,show }}>{children}</CartContext.Provider>
}   


 