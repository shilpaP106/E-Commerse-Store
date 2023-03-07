import React, { useEffect, useState } from "react";
import Card from "../card/card";
// import data from "../Data.json";
import "./products.css";
import Navbar from "../Navbar/navbar";

const Products = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:1337/api/products")
        .then((res) => res.json())
        .then((response) => setData(response.data))
      // console.log(data)
        // setId([...id])
    },[])
   

    // console.log(data)

    return (
        <>
            <Navbar />
            <div className="main-container" >
                {data?.map((data, index) => {
                    return (
                        <div key={index} >
                            {/* {console.log(data.attributes)} */}
                            <Card
                                data={data}
                                image={data.attributes.url}
                                name={data.attributes.Title}
                                desc={data.attributes.description
                                }
                                price={data.attributes.price}
                            
                                />

                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Products;