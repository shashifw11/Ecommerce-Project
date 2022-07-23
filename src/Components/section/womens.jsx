import {useState , useEffect} from "react" ; 
import axios from "axios" ; 
import { Card } from "../card/cards";
import "./mens.css" ; 
import { Pagination } from '@material-ui/lab';
export const Womens =()=>{ 
  const [data , setData]  = useState([]) ; 
  //const [page , setPage] = useState(10) ;

//   function handleChange(prev){
//       setData(page+1)
       
//     }
    //console.log(data)

   useEffect(()=>{
        getData() ; 
   },[]) 

   function getData(data){
      axios.get(`http://localhost:8080/data`).then((data)=>{
        let arr = data.data
         
        var arr2 = [] ; 
   for(var i = 0 ; i<arr.length ; i++){
         if(arr[i].category==="women's clothing"){
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
        {/* <Pagination count={3} page={page} onChange={handleChange} /> */}
      </div>
  )
}