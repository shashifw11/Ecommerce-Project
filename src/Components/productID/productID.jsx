import {useParams} from "react-router-dom" ; 
import {useState,useEffect} from "react" ; 
import axios from "axios" ; 
import {Link} from "react" ; 
import { CardID } from "./CardID";
import Spinner from 'react-bootstrap/Spinner'
export const ProductDetails=()=>{
    const {id} = useParams() ; 
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false) ; 

    useEffect(()=>{
          getData() ; 
    },[]) ;  

     const getData = ()=>{
      setLoading(true)
         axios.get(`https://ecomday.herokuapp.com/data/${id}`).then((data)=>{
          //https://ecomday.herokuapp.com/data/
               //https://fakestoreapi.com/products
               //http://localhost:8080/data/${id}
              setData(data.data) ; 
              setLoading(false)
         })
     }
    return loading ? ( <Spinner animation="border" />): (
      <div>  
        
         <CardID id = {data.id} title={data.title} price={data.price} description={data.description} category={data.category} image={data.image} rating={data.rating}/>
      </div>
    )
}