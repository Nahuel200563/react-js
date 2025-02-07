import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "../ItemDetail.css";

export default function NavBar() {
  return (
    <nav className="shadow-lg">
      <div className="container-fluid d-flex align-items-center">
        <div className="navbar-brand" style={{ width: "15%" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3408/3408890.png"
            alt=""
            style={{ maxWidth: "25%", height: "auto", margin: "10px" }}
          />
        </div>

        <div className="flex-grow-1 d-flex justify-content-center">
          <ul className="list-unstyled d-flex m-0">
            <li className="mx-4 fs-3 fw-bold">
              <Link to="/" className="text-decoration-none text-dark">
                {" "}
                Inicio{" "}
              </Link>
            </li>
            <li className="mx-4 fs-3 fw-bold">
              <Link to="/Tienda" className="text-decoration-none text-dark">
                {" "}
                Tienda{" "}
              </Link>
            </li>
            <li className="mx-4 fs-3 fw-bold">
              <Link to="/Contacto" className="text-decoration-none text-dark">
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-3" style={{ width: "15%" }}>
          <Link to="/cart" className="text-decoration-none text-dark">
            {" "}
            <CartWidget />{" "}
          </Link>
        </div>
      </div>

      <ul className="categoryes mx-1 fs-6 fw-bold ">
        <li>
          <Link
            to="/category/herramientas"
            className="text-decoration-none text-dark"
          >
            {" "}
            Herramientas
          </Link>
        </li>
        <li>
          <Link
            to="/category/superficies"
            className="text-decoration-none text-dark mx-4"
          >
            {" "}
            Superficies
          </Link>
        </li>
        <li>
          <Link
            to="/category/materiales"
            className="text-decoration-none text-dark"
          >
            Materiales{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
