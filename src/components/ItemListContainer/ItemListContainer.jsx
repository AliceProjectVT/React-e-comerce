import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProduct, getCategorias } from '../../data';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (idCategoria) {
          res = await getCategorias(idCategoria);
        } else {
          res = await getProduct();
        }
        setProductos(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idCategoria]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
