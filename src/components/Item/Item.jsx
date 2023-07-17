import { Link } from 'react-router-dom'

export const Item = ({ id, nombre, alt, imagen, precio, productoCarro, setearCarro, contadorProductos, setearContador, total,setTotal}) => {
  
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
    <div className="producto" key={id}>
      <span className="nombre-producto">{nombre}</span>
      <img src={imagen} alt={alt} className="imagen-producto" />
      <span className="precio-producto">$ {precio}</span>
      <section className='botones-activos'>
      <button onClick={() => onAddProduct({ id, nombre, precio })} className="boton-producto">
        Añadir
      </button>
      <button className="boton-producto"  >
      <Link className='link-sin-estilo' to={`/item/${id}`}> Detalles </Link>
      </button>
      </section>
    </div>
  );
};

export default Item;

