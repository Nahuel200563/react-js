import { createContext, useState } from "react";
const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function countItemsInCart() {
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalItems += item.count;
    });
    return totalItems;
  }

  function countPriceItemsInCart() {
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalItems += item.count * item.price;
    });
    return totalItems;
  }

  function addItem({ price, id, title, img, count }) {
    const copyCartItems = [...cartItems];
    copyCartItems.push({
      price: price,
      id: id,
      title: title,
      img: img,
      count: count,
    });
    setCartItems(copyCartItems);
  }

  function removeItem(id) {
    const copyCartItems = [...cartItems];
    const index = copyCartItems.findIndex((item) => item.id === id);
    copyCartItems.splice(index, 1);
    setCartItems(copyCartItems);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <cartContext.Provider
      value={{
        clearCart: clearCart,
        countItemsInCart: countItemsInCart,
        cartItems: cartItems,
        addItem: addItem,
        removeItem: removeItem,
        setCartItems: setCartItems,
        name: "carrito de compras",
        curso: "ReactJS",
        countPriceItemsInCart: countPriceItemsInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
