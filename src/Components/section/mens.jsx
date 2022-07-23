import {useState , useEffect} from "react" ; 
import axios from "axios" ; 
import { Card } from "../card/cards";
import "./mens.css" ; 
import { Pagination } from '@material-ui/lab';

export const Mens=()=>{ 
  const [data , setData]  = useState([]) ; 
  const [page , setPage] = useState(1) ; 
    //console.log(page)

    function handleChange(prev){
           setPage((prev)=>{
                return  prev+ 1
            }) ; 
         } 
    

   useEffect(()=>{
        getData() ; 
   },[page]) 

   function getData(data){
      axios.get(`https://ecomday.herokuapp.com/data?_page=${page}&_limit=4`).then((data)=>{
        //https://ecomday.herokuapp.com/data
        //http://localhost:8080/data
              //https://fakestoreapi.com/products?_page=${page}&_limit=5
               
              let arr = data.data
              var arr2 = [] ; 
         for(var i = 0 ; i<arr.length ; i++){
               if(arr[i].category==="men's clothing"){
                       arr2.push(arr[i]);
               } 
                 setData(arr2) ; 
          }
      
     
      })
   } 


  return ( 
      <div className = "boxes">
          {data.map((e , i)=>{
              return <div key = {i}>
                   <Card id = {e.id} title = {e.title} price={e.price} description={e.description} category={e.category} image={e.image} rating={e.rating}/>
              </div>
              
          })}
       <div>
       <Pagination count={3} page={page} onChange={handleChange} />
       </div>
      </div> 
      
  )
}