import React from "react";

//component for rendering individual items
const Cards = ({ item, handleClick }) => {
//props

//when the user click data is passed to the handleClick function inside amazon.js
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>  
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
