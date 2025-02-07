import Button from "./Button";
import "../CardProducts.css";
import { Link } from "react-router-dom";
import artItems from "../../data/data";
import "../ItemDetail.css";

function Item(props) {
  const { price, title, text, img, id } = props;

  return (
    <div className="card">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
          <Link to={"/item/" + id}>
            <p>Ver más</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
