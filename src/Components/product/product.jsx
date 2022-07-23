import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../card/cards";
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
import { useContext } from "react";
import "./product.css";
import { SearchContext } from "../../context/search";
import {Link} from "react" ; 
import Spinner from 'react-bootstrap/Spinner'


export const Product = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading , setLoading] = useState(false) ; 
 
    //const {item}  = useContext(SearchContext)

    function handleChange(page) {
        setPage((page) => {
            return page + 1
        })
    }


    const myfunc = (asd) => {
        data.sort((a, b) => {
            if (a.title > b.title) return asd ? 1 : -1
            else
                return !asd ? 1 : -1
        })
        setData([...data])
    }
    const myfunct = (asd) => {
        data.sort((a, b) => {
            if (a.rating.rate > b.rating.rate) return asd ? 1 : -1
            else
                return !asd ? 1 : -1
        })
        setData([...data])
    }


    const myfun = (asd) => {
        data.sort((a, b) => {
            if (a.price > b.price) return asd ? 1 : -1
            else
                return !asd ? 1 : -1
        })
        setData([...data])
    }

    useEffect(() => {
        getData();
    }, [page])

    function getData(data) { 
        setLoading(true)
        axios.get(`https://ecomday.herokuapp.com/data?_page=${page}&_limit=20`).then((data) => {
            //https://ecomday.herokuapp.com/data
            //http://localhost:8080/data?_page=${page}&_limit=20
            //https://fakestoreapi.com/products?_page=${page}&_limit=20
            
        setData(data.data);
            setLoading(false) ;
        })
        
    }


    return loading ? ( <Spinner animation="border" />):(
        <div className="button">
            <Button onClick={() => myfun(true)} variant="contained" color="primary">sort by price<i className="fa-solid fa-arrow-down"></i></Button>
            <Button onClick={() => myfun(false)} variant="contained" color="primary">sort by price<i className="fa-solid fa-arrow-up"></i></Button>
            <Button onClick={() => myfunc(true)} variant="contained" color="primary">sort by Name A<i className="fa-solid fa-arrow-right"></i>Z</Button>
            <Button onClick={() => myfunc(false)} variant="contained" color="primary"> Z<i className="fa-solid fa-arrow-left"></i>A sort by Name</Button>
            <Button onClick={() => myfunct(false)} variant="contained" color="primary">sort by Rate</Button>
            <div className="boxes">

                {data.map((e, i) => {
                    return <div key={i}>
                    <Card id = {e.id} title={e.title} price={e.price} description={e.description} category={e.category} image={e.image} rating={e.rating} />
                    </div>
                })}

            </div >

            <div className="pagin">
                <Pagination count={5} page={page} onChange={handleChange} />
            </div>
        </div>
    )
}