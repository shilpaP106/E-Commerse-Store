import React, { useContext } from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

const Card = ({ data, name, image, desc, price }) => {
    const navigate = useNavigate();

    const { product, setProduct } = useContext(CartContext)

    return (
        <>
            <div className="card-container" >
                <div>
                    <img src={image} alt="" className="image" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <h4><span>&#8377;</span> {price}</h4>
                    {
                        product.find((e) => e.id === data.id) ? (
                            <>
                             <button>Added to Cart! </button>
                            <button onClick={() => { navigate("/cart") }} >Go to cart</button>
                            </>
                        )
                            : (
                                <button onClick={() => setProduct([...product, data])} >Add to Cart</button>
                            )
                    }

                </div>
            </div>

        </>
    )
}

export default Card;