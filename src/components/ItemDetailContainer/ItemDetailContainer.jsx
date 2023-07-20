import React, { useEffect, useState } from 'react';
import { getUnProduct } from '../../data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUnProduct(id)
      .then((res) => setProducto(res))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
     <ItemDetail  {... producto}/>
    </div>
  );
};

export default ItemDetailContainer;
