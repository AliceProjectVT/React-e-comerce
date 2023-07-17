import React, { useEffect } from 'react'
import { data } from '../data'
import { useParams } from 'react-router-dom';

export const ItemList = ({ productoCarro, setearCarro, contadorProductos, setearContador, total,setTotal }) => {
    const onAddProduct = (product) => {
        if(productoCarro.find(item => item.id === product.id)){
            const products = productoCarro.map(item => 
                item.id === product.id 
                ? {... item, cantidad: item.cantidad + 1} 
                : item
                );
                  setTotal(total + product.precio * product.cantidad)
                  setearContador(contadorProductos + product.cantidad)
                
            return setearCarro([...products])
          }
          setTotal(total + product.precio * product.cantidad)
          setearContador(contadorProductos + product.cantidad)
          setearCarro([...productoCarro, product]);
    };
  
    
   
    
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
  };
  


export default ItemList