import React ,{useContext}from "react";
import "./navbar.css";
import { CartContext } from "../../App";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useNavigate} from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();
    const { product } = useContext(CartContext)
    return (
        <>
            <div className="nav-container" >
                <div className="game" >
                <h3>Games Store</h3>
                <SportsEsportsIcon/>
                </div>
                <div className="right-nav" >
                    <div className="home" onClick={()=>{navigate("/")}} >
                        <HomeIcon />
                        <h3>Home</h3>
                    </div>
                    {/* <Link to={"/cart"} > */}
                    <div className="cart"  >
                        <ShoppingCartIcon onClick={()=>{navigate("/cart")}} />
                    </div>
                    {/* /</Link> */}
                   
                </div>

            </div>
        </>
    )
}

export default Navbar;