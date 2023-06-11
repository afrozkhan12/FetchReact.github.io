import React, { useEffect, useState } from "react";
import axios from 'axios';


const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res);
      setData(res.data);
    }).catch((error) => {
      console.log(error);
    })
 
  }, [])


  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Fetch data using api through React</h1>
        <div className="cards row justigy-content-center gap-5">
          { 
            data.map((value) => (
              <div className="card" style={{ width: "18rem",  boxShadow: "0 0 10px 5px grey" }} key={value.id}>
                <img src={value.image} className="card-img-top" alt={value.title} style={{height: "300px"}} />
                <div className="card-body">
                  <h5 className="card-title">{value.title.substr(1, 15)} </h5>
                  <p className="card-text">{value.description.substr(1,100)}</p>
                  <h5 className="card-title">Price: {value.price}</h5>
                  <a href="/" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App;