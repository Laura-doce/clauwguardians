import "./formulario.css";
import Login from "../../pages/img/login.png";

export default function Formulario() {
  return (
    <div className="row form">
      <div className="col-4"></div>
      <div className="col-4 form-container">
        <img className="login-logo" src={Login} alt="" />
        <h2>Inicio</h2> <span className="my-span">Sesión</span>
        <form id="contact-form">
          <div className="form-group">
            <input className="" type="text" placeholder="Correo" />
          </div>
          <div className="form-group">
            <input className="" type="text" placeholder="Contraseña" />
          </div>
          <button className="boton" type="submit">
            Inicio sesion
          </button>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
