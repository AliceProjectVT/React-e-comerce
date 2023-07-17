import { Item } from '../Item/Item';

export const ItemList = ({ productos }) => {
  return (
    <section className="contenedor">
      <div className="contenedor-producto">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
};
