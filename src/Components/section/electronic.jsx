import {useState , useEffect} from "react" ; 
import axios from "axios" ; 
import "./mens.css" ; 
import { Card } from "../card/cards";
import { Pagination } from '@material-ui/lab';

export const Electronic=()=>{ 
  const [data , setData]  = useState([]) ; 
  const [page , setPage] = useState(1) ;
    //console.log(data)

  function handleChange(){
      setPage((prev)=>prev+1)
  }
   useEffect(()=>{
        getData() ; 
   },[]) 

   function getData(data){
      axios.get(`http://localhost:8080/data`).then((data)=>{
        let arr = data.data
        var arr2 = [] ; 
   for(var i = 0 ; i<arr.length ; i++){
         if(arr[i].category==="electronics"){
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
                   <Card  id = {e.id}  title = {e.title} price={e.price} description={e.description} category={e.category} image={e.image} rating={e.rating}/>
              </div>
          })}
     <Pagination count={4} page={page} onChange={handleChange} />
      </div>
  )
}