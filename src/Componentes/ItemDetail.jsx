import { Link } from "react-router-dom";
import Button from "./Button";
import ItemCounter from "./ItemCounter";
import "../ItemDetail.css";
import artItems from "../../data/data";
import "../ItemDetail.css";
import { useContext, useState } from "react";
import cartContext from "../Storage/cartContext";

function ItemDetail(props) {
  const { title, price, stock, img, category, description, id } = props;
  const { addItem } = useContext(cartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  function handleAddToCart(count) {
    console.log(`agregaste ${count} items al carrito`);

    addItem({ id, price, count, title, img });
    setIsAddedToCart(true);
  }

  return (
    <div className="card">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <div>
          <p className="card-price">${price}</p>
        </div>
        <div className="div-detail">
          <p className="card-stock"> STOCK: {stock} </p>
          {isAddedToCart ? (
            <Link to="/cart">
              <button>Ver carrito</button>
            </Link>
          ) : (
            <ItemCounter max={stock} onSubmitCount={handleAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
