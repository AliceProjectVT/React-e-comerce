import { useState } from 'react';

export const useAddProduct = () => {
  const [productoCarro, setearCarro] = useState([]);
  const [contadorProductos, setearContador] = useState(0);
  const [total, setTotal] = useState(0);

  const onAddProduct = (product) => {
    if (productoCarro.find((item) => item.id === product.id)) {
      const products = productoCarro.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setTotal(total + product.precio * product.cantidad);
      setearContador(contadorProductos + product.cantidad);

      return setearCarro([...products]);
    }
    setTotal(total + product.precio * product.cantidad);
    setearContador(contadorProductos + product.cantidad);
    setearCarro([...productoCarro, product]);
  };

  return { productoCarro, contadorProductos, total, onAddProduct };
};
