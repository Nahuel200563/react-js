import React, { useState } from "react";
import { useContext } from "react";
import cartContext from "../Storage/cartContext";
import { createBuyOrder } from "../../data/database";
import "../cart.css";

function CartContainer() {
  const { cartItems, removeItem, countPriceItemsInCart, clearCart } =
    useContext(cartContext);
  const [orderID, setOrderID] = useState(null);

  async function handleCheckout() {
    const orderData = {
      buyer: {
        name: "Juan",
        phone: "123456",
        email: "qsy@gmail.co",
      },
      items: cartItems,
      total: countPriceItemsInCart(),
      date: new Date(),
    };
    console.log("Order Data:", orderData);
    try {
      const newOrderID = await createBuyOrder(orderData);
      console.log("Comprando", newOrderID);
      setOrderID(newOrderID);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden de compra:", error);
    }
  }

  return (
    <div>
      <h1 className="cartName"> Tu Carrito</h1>
      {orderID ? (
        <div>
          <p className="CartCompra">
            Gracias por tu compra. Tu ID de compra es: {orderID}
          </p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="cartEMP">El carrito está vacío.</p>
      ) : (
        <div className="cartContainer">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.img} alt={item.title} />
              <div>
                <h3> {item.title} </h3>
                <p>precio: {item.price}</p>
                <p>Unidades: {item.count}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <div className="cartTotal">
            <button onClick={handleCheckout}> Comprar </button>
            <button onClick={clearCart}> Vaciar Carrito </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
