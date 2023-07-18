import React from 'react'
import { useEffect, useState } from 'react'
import {getUnProduct} from "../../data"
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const {idItem} = useParams();

    useEffect(()=>{
        getUnProduct(idItem)
        .then(res=> setProduct(res))


    }, [idItem])
   
  return (
    <div>
        <ItemDetail {... product}/>
    </div>
  )
}

export default ItemDetailContainer