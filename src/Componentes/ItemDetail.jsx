import { Link } from "react-router-dom";
import Button from "./Button";
import ItemCounter from "./ItemCounter";
import "../ItemDetail.css";
import artItems from "../../data/data";
import "../ItemDetail.css";

function ItemDetail(props) {
  const { title, price, stock, img, category, description, id } = props;
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
          <ItemCounter></ItemCounter>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
