import {createContext,useState,useEffect} from "react" ; 
 import axios from "axios" ; 
export const SearchContext = createContext() ; 

export const SearchContextProvider = ({children})=>{
    const [text,setText] = useState([]) ;
    const [item,setItem] = useState([]) ; 
       // console.log(text) ; 
    useEffect(()=>{
         getData() ; 
    },[]) ; 

    function getData(){
        axios.get(`http://localhost:8080/data`).then((data)=>{
            var arr = data.data 
             let New = []
             for(var i = 0 ; i<arr.length ; i++){
                 if(arr.price == text || arr.title == text || arr.category == text){
                        New.push(arr[i]);
                 }
             }
             // console.log(New) ; 
            setItem(New)
        })
    }

   const handleChange=(data)=>{
            setText(data)
   }

    return <SearchContext.Provider value = {{item,text,handleChange}}>{children}</SearchContext.Provider>
}   