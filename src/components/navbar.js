import React from "react";
import "../styles/navbar.css"; //importing navbar.css from styles folder


//when i click on myShopping it will show the data---my_shop class
//when i click on cart it will show me added items to the cart---cart class
const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>  
          My Shoping
        </span>
        <div className="cart" onClick={() => setShow(false)}>	
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
