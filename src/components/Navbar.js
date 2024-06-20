import React from 'react'
import './Navbar.css'
import image2 from '../images/im3.png'
import { Link, Navigate } from 'react-router-dom'
import Admin from '../pages/Admin'
import Menu from '../Menu/Menu'
import { TbCircleDashedPercentage } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const Navbar =()=>{
    return(
        <div>
<div class="topnav">
<a class="navbar-brand" href="#">
    <img src={image2} width="50" height="50" alt=""/>
  </a>
<a href="#news"></a>
<a href="#contact"></a>

<div class="topnav-right mt-3" >
  <a href="#search"><CiSearch />
  Search</a>
          <Link class="nav-link" to="/admin">Admin</Link>
          <Link class="nav-link" to="/menu">Menu</Link>

  <a href="#about"><TbCircleDashedPercentage />
  Offers</a>
  <a href="#search">Help</a>
  <a href="#about">Sign In</a>  
  <a href="#search">Cart</a>
</div>

</div>



        </div>
    )
}

export default Navbar;