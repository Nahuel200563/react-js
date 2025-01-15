import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import artItems from "../../data/data";
import CardProduct from "./item";

function ItemList() {
  const list = artItems.map((prod) => (
    <CardProduct
      id={prod.id}
      key={prod.id}
      title={prod.title}
      price={prod.price}
      text={prod.category}
      img={prod.img}
    >
      <div>
        <h2>{prod.title}</h2>
        <Link to={`/item/${prod.id}`}>Ver más</Link>
      </div>
    </CardProduct>
  ));

  return <div className="CardProducts">{list}</div>;
}

export default ItemList;
