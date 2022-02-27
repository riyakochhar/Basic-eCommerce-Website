import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);  //add to cart 
  const [cart, setCart] = useState([]);

//uplifting data from amazon.js to its parent app.js
//when the user clicks at add to cart btn if the item is already present it simply returns else it will push it into the array
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]); //passing this cart array to handle change to access all data 
  };


//handleChange function will basically used to increment/decrement the amount of item
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);


//print all the data when we click on the cart button
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />  //if value of show is true it will render the amazon component
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />  //if value of show is false it will render the cart component
      )}
    </React.Fragment>
  );
};

export default App;
