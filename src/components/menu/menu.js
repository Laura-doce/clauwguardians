import "./menu.css";
import logo from "../../pages/img/logo-dark.png";

export default function Menu() {
  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg menu">
          <div className="container-fluid">
            <a className="navbar-brand menu" href="#">
              <img
                src={logo}
                alt=""
                className="d-inline-block align-text-top logo"
              />{" "}
              <h1 className="site-title"> Clauw </h1>{" "}
              <span className="my-span"> Guardians </span>
            </a>
            <button
              className="navbar-toggler toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end item"
              id="navbarSupportedContent"
            >
              <ul className="justify-content-end item">
                <li className="nav-item item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="../../pages/Index/index.js"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item item">
                  <a className="nav-link" href="#">
                    Productos
                  </a>
                  <a className="nav-link" href="#">
                    Servicios
                  </a>
                  <a className="nav-link" href="#">
                    Inicio sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
