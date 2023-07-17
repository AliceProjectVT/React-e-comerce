import React, { useState } from "react";

export const CartWidget = ({
  productoCarro,
  setearCarro,
  total,
  contadorProductos,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="container-icon">
      <div className="container-cart-icon" onClick={() => setActive(!active)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div className="count-products">
          <span id="contador-productos">{contadorProductos}</span>
        </div>
      </div>

      <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
        {productoCarro.length ? (
          <>
            <div className="row-product ">
              {productoCarro.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">
                      {product.cantidad}
                    </span>
                    <p className="titulo-producto-carrito">{product.nombre}</p>
                    <span className="precio-producto-carrito">
                      {product.precio}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-close"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="cart-total ">
              <h3>Total:</h3>
              <span className="total-pagar">${total}</span>
            </div>
            <button className="vaciar-carrito">Vaciar Carrito</button>
          </>
        ) : (
          <p className="cart-empty">El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};

export default CartWidget;
