import React,{ useState } from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom";


export const NavBar = ( {productoCarro, setearCarro, total, contadorProductos}) => {
    const[active, setActive] = useState(false);
    return (
      <header>
        <Link to="/">
        <h1>Tienda</h1>
        </Link>
        <li> <NavLink to="/" >  Todos los productos </NavLink>  </li>
        <li> <NavLink to="/categoria/abarrotes">  Abarrotes           </NavLink>  </li>
        <li> <NavLink to="/Frutas">  Frutas              </NavLink>  </li>
        <li> <NavLink to="/Verduras">  Verduras            </NavLink>   </li>
        <CartWidget productoCarro={productoCarro} setearCarro={setearCarro} total={total} contadorProductos={contadorProductos} />
        <br />
      </header>
    );
  };