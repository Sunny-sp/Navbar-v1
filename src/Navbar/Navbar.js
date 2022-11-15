import { useState } from "react";
import { MenuItems } from "./Menu";
import "./Navbar.css"
export const Navbar = () => {
    const [isClicked,setIsClicked]=useState(false)
    const handleClick = ()=>{
        setIsClicked(!isClicked)
    }
  return (
    <nav className="NavbarItems">
        <h1 className="Navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={handleClick}>
            <i className={isClicked?"fas fa-times":"fas fa-bars"}></i>
        </div>
      <ul className={isClicked?"nav-menu active":"nav-menu"}>
        {MenuItems.map((item,index) => {
          return <li key={index}><a href={item.link} className="nav-links">{item.title}</a></li>;
        })}
      </ul>
    </nav>
  );
};
