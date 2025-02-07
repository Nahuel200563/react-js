import { useContext } from "react";
import cartContext from "../Storage/cartContext";

export default function CartWidget() {
  const context = useContext(cartContext);
  return (
    <div className="">
      <ul className="d-flex">
        <i className="bi bi-cart3 fs-4"></i>
        <i className="">
          <p>{context.countItemsInCart()}</p>
        </i>
      </ul>
    </div>
  );
}
