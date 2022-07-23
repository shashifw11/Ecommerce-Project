import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/search";
import { CartContext } from "../../context/CartContext";
import Button from '@material-ui/core/Button';
import { AuthContext } from "../../context/Auth"
import axios from "axios";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export const Navbar = () => {
  const [text, setText] = useState("")
  const { handleChange } = useContext(SearchContext);
  const { isAuth } = useContext(AuthContext)

  const [cartcount, setCartcount] = useState(0)
  const {show} = useContext(CartContext) ; 
 

  useEffect(() => {
    axios.get("http://localhost:8080/Cart_item").then((data) => {
      setCartcount(data.data.length)
    })
  }, [show])  ; 
      
  

  
  return (
    <div>
      <nav style={{ background: "black" }} className="navbar navbar-expand-lg navbar-light bg-light">
        <div style={{ background: "#1f80e0", padding: "10px", }} className="container-fluid">
          {/* <Link to = "/">Home</Link> */}

          <Link to="/" style={{color : "white" , fontWeight: "bold" }} className="navbar-brand" >
            <img src="https://e-cart-aea99.web.app/images/logo.png" style={{height: "50px" }} />
            E-CART</Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
              <li   className="nav-item">
                <Link to="/mens" className="nav-link active" aria-current="page" style = {{fontWeight : "bolder"  ,color : "white"}}>Men's</Link>
              </li>
              <li className="nav-item">
                <Link to="/womens" className="nav-link" style = {{fontWeight : "bolder"  ,color : "white"}}>Women's</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style = {{ fontWeight : "bolder"  , color : "white"}}>
                  Section
                </a>
                <ul style={{ color: "white" }} className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li style={{ color: "white" }}><Link to="/mens" className="dropdown-item" >Men's</Link></li>
                  <li><Link to="/womens" className="dropdown-item">Women's</Link></li>
                  <li><Link to="/electronic" className="dropdown-item" >Electronics</Link></li>
                  <li><Link to="/jewlery" className="dropdown-item" >Jewlery</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            <form onSubmit={(e) => { e.preventDefault() }} className="d-flex">
              <input onChange={(e) => {
                setText(e.target.value)
              }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button value="submit" style={{ background: "tomato", marginRight: "50px", }} className="btn btn-outline-success" type="submit" onClick={() => {
                handleChange(text);
              }}>Search</button>
            </form>
            <div>
              <Link to="/cart">
                <button style={{ marginRight: "20px", border: "none", background: "#1f80e0", width: "100px" }}>
                  <ShoppingCartOutlinedIcon style={{ color: "white", fontSize: "50px", float: "left" }}>
                  </ShoppingCartOutlinedIcon> <span style={{ fontSize: "20px", padding: "", color: "white", fontWeight: "bolder", borderRadius: "50%", background: "" }}>{cartcount}</span>
                </button></Link>

              <Link to="/login"><Button style={{ marginTop: "10px", color: "white", border: "1px solid white" }} variant="outlined" color="secondary">
                Login
              </Button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}