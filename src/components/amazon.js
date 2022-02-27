import React, { useState } from "react"; //importing hooks so that when a user clicks on add to cart there will be an increase in the number nd will be shown om the cart button
import list from "../data";             //import content id,img,button
import Cards from "./card";		//import html tags to store this content
import "../styles/amazon.css";		//import css to prvide styling

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (  //render the components cards in the list by dowing this it will show all card details id,img and all on the web page
        <Cards key={item.id} item={item} handleClick={handleClick} /> //providing cards data by using key else it will give an error as key is unique for all
			 //  pass props item   and passing handle click (used for add to cart functionality) as a props
      ))}
    </section>
  );
};

export default Amazon;
