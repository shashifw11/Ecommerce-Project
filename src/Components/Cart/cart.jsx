import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartCard from "./cartcard";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
//import {PaymenContext} from "../../context/payment" ; 



export const Cart = () => {

  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState()
  const [total, setTotal] = useState(0); 
  const [show , setShow] = useState(false) ; 
  const {CartChange} = useContext(CartContext) ; 
          
 useEffect(() => {
    var sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum = sum + cart[i].price * cart[i].item_count
      setTotal(sum.toFixed(2)); 
        if(i==0){
          setNum(i)
         
        }else {
          setNum(i + 1)
         
        }
     
    }
  }, [cart])


  
    
  useEffect(() => {
    postItem();
  }, [])

  const postItem = () => {
    setLoading(true)
    axios.get("https://ecomday.herokuapp.com/Cart_item").then((data) => {
      //https://ecomday.herokuapp.com/Cart_item
         //http://localhost:8080/Cart_item
      //https://fakestoreapi.com/carts
     
    setCart(data.data);
      setLoading(false);
    })

  }

  const deleteChange = async (id) => {
    try {
      await axios.delete(`https://ecomday.herokuapp.com/Cart_item/${id}`).then(postItem()).then(CartChange(show?false:true)) ; 
                   //https://fakestoreapi.com/carts
                   //http://localhost:8080/Cart_item/${id}
                   //https://ecomday.herokuapp.com/Cart_item/${id}
    } catch (err) {
      console.log(err)
    }
  }

  return loading ? (<Spinner animation="border" />) : (
    <>
    <div style={{float : "right"  , marginRight : "20px"}}>
          <button style={{border : "none" , width: "250px", padding: "7px", background: "#1a5d9b", color: "white" }}>
            Cart Item : {num}</button>
        </div>

      <div>
        

        <Scrollbars style={{marginLeft: "30%", maxWidth: "600px", height: "500px" }}>

          {cart.map((e, i) => {
            return <div style={{ marginTop: "10px " }} key={i}>

              <CartCard id={e.id} deleteChange={deleteChange} price={e.price} image={e.image} category={e.category} title={e.title} item_count={e.item_count} />

            </div>
          })}
        </Scrollbars>

        <div style={{float: "right", maxWidth: "650px" }}>
          <Button style = {{ marginTop : "10px", padding :  "5px" , width : "250px" , marginLeft : "50px"}} variant="danger">Total : $ {total}</Button>
          <Link to = "/checkout"><Button style = {{ marginTop : "10px", width : "250px" , marginLeft : "20px"}} variant="primary" size="lg" active>
    Proceed To Checkout
  </Button></Link>
        </div>
       </div>
     </>
  )
}
