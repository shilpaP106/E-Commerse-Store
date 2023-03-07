import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import Navbar from "../Navbar/navbar";
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css';
// import data from "../Data.json"

const ProductDisplay =  () => {
    const [money, setMoney] = useState(0)
    // const [products, setProducts] = useState([])

    const { product,setProduct } = useContext(CartContext)

    // useEffect(() => {
    //     fetch("http://localhost:1337/api/products")
    //         .then(response => response.json())
    //         .then((data) => setProducts(data.data))

    // }, [])
 

    useEffect(() => {
        if (product.length === 0) {
            setMoney(0);
            return;
        }
        let total = 0;
        for (let i = 0; i < product.length; i++) {
            total += product[i].attributes.price
        }
        setMoney(total)
    }, [product])

    const pay = () => {
      const formdata = new FormData();
      for(let i=0;i<product.length;i++){
        formdata.append(i+1 , product[i].id);
      }
      fetch("http://localhost:3001/create-checkout-session",{
        method:"POST",
        body:formdata
      }).then(res => res.json())
      .then(url => {
        setProduct([]);
      window.location = url.url
    console.log(url.url)})
    .catch(e => {
      
    })
    }

    return (
        <>
            <Navbar />
            {product ?
                <div className="cart-container" >
                    {product?.map((cart, index) => {
                        return (
                            <div key={index} className="cartbox">
                                <img src={cart.attributes.url} alt="img" className="img" />
                                <div className="detail" >
                                    <h2>{cart.attributes.Title}</h2>
                                    

                                    <h4 className="price" ><span>&#8377;</span> {cart.attributes.price}</h4>
                                </div>
                                <div className="delete"  >
                                        <DeleteIcon />
                                    </div><br />
                            </div>
                        )
                    })}
                    <br />
                    <h3 className="price" >Total Price:<span>&#8377;</span> {money}</h3>
                    <br/><br/>
                    <form action="/create-checkout-session" method="post" >
                    <button type="submit" className="btn" onClick={pay} >Pay Now</button>
                    </form>
                 

                </div>

                : (
                  <div className="cart-container" >No items to show in Cart</div>
                )}

        </>
    )
}

const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

const Cart = () => {
    const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
   
}

export default Cart