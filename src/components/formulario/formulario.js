import "./formulario.css";
import Login from "../../pages/img/login.png";
import Servicios from "../../pages/servicios/servicios";

export default function Formulario() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form className="form-container">
            <img className="login-logo" src={Login} alt="" />
            <h2>
              Inicio <span className="my-span-login">Sesión</span>
            </h2>
            <div className="form-group">
              <input className="" type="text" id="User" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input
                className=""
                type="text"
                id="pass"
                placeholder="Contraseña"
              />
            </div>
            <button className="boton" type="">
              Inicio sesion
            </button>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
