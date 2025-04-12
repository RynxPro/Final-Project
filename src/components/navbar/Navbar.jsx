import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar">
        <button className="button">Home</button>
        <button className="button">Store</button>
        <button className="button">Library</button>
        <button className="button">Profile</button>
      </nav>
    </section>
  );
};

export default Navbar;
