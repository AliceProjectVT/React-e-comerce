import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from "./ItemList"
import { useParams } from 'react-router-dom';
import { data } from '../data';
 


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams ();

    useEffect(()=>{

      const funcion = idCategoria ? getCategorias : getProduct 

      funcion(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))

    },[idCategoria])
}
return(
    <>
    
    
    <ItemList prtoductos={data} /> 
    </>



)

export default ItemListContainer