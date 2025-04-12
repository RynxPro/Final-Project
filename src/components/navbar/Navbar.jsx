import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar">
        <Link href="/" passHref>
          <button className="button">Home</button>
        </Link>
        <Link href="/store" passHref>
          <button className="button">Store</button>
        </Link>
        <Link href="/library" passHref>
          <button className="button">Library</button>
        </Link>
        <Link href="/profile" passHref>
          <button className="button">Profile</button>
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
