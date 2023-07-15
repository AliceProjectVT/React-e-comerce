import React,{ useState } from 'react'
import CartWidget from './CartWidget'

export const NavBar = ( {productoCarro, setearCarro, total, contadorProductos}) => {
    const[active, setActive] = useState(false);
    return (
      <header>
        <h1>Tienda</h1>
        <li>Todos los productos</li>
        <li>Abarrotes</li>
        <li>Frutas</li>
        <li>Verduras</li>
        <CartWidget productoCarro={productoCarro} setearCarro={setearCarro} total={total} contadorProductos={contadorProductos} />
        <br />
      </header>
    );
  };