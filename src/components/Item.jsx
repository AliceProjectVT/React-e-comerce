import React from 'react'
import {ProductList } from "./ItemList"

const Item = () => {
  
    return (
        <section className='contenedor'>
          <div className='contenedor-producto'>
            {data.map((product) => (
              <div className='producto' key={product.id}>
                <span className='nombre-producto'>{product.nombre}</span>
                <img src={product.imagen} alt={product.alt} className='imagen-producto' />
                <span className={product.precio}></span>
                <button onClick={() => onAddProduct(product)} className='boton-producto'>
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Item