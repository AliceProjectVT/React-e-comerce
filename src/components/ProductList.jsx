import React from 'react'
import { data } from '../data'
import BaseComponent from 'bootstrap/js/dist/base-component'


export const ProductList = ({allProducts, setAllProducts}) => {

    const onAddProduct =()=>{
        console.log("add")
    }
  return (
    <section className='contenedor'>
    <div className='contenedor-producto'>
      {data.map(product =>(
        <div className="producto">                
        <span className="nombre-producto">{product.nombre}</span>
        <img src={product.imagen} alt={product.alt} className="imagen-producto"/>
        <span className={product.precio}></span>
        <button onClick={()=> onAddProduct()} className="boton-producto">Añadir al carrito</button>
        </div>
        ) )}
        </div>
        </section>
  )
}


export default ProductList