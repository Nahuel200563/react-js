import CartWidget from "./CartWidget";

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
              <a className="text-decoration-none text-dark" href="">
                Inicio
              </a>
            </li>
            <li className="mx-4 fs-3 fw-bold">
              <a className="text-decoration-none text-dark" href="">
                Tienda
              </a>
            </li>
            <li className="mx-4 fs-3 fw-bold">
              <a className="text-decoration-none text-dark" href="">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="p-3" style={{ width: "15%" }}>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
