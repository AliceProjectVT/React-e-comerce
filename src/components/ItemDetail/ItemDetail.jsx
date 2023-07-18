




const ItemDetail = ({id, nombre, precio, img}) => {
    return (
      <div className='contenedorItem'>
          <h2>Nombre: {nombre} </h2>
          <h3>Precio: {precio} </h3>
          <h3>ID: {id} </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam modi quibusdam quasi illum, assumenda at sunt iure voluptas quaerat tempore explicabo nam voluptates rem culpa voluptate. Ipsa qui dicta repellat.</p>
          <img src={img} alt={nombre} />
      </div>
    )
  }
  
  export default ItemDetail