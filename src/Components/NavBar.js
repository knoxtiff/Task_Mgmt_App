import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Logos/Logo.png'
import './navbar.css';

function NavBar() {

  return (
    <header>      
      <img className='logo' src={logo} alt='Completed Company Logo' />
      <h3>COMPLETED TASK MANAGEMENT APP</h3>
      <ul className="navbar">
        <li className="navbarlink"><Link to="/">Home</Link></li>
        <li className="navbarlink"><Link to="/tasks">Tasks</Link></li>
        <li className="navbarlink"><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}
export default NavBar; 