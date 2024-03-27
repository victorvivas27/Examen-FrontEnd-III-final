import React, { useState } from "react";
import "./Form.css";
import { validateFields } from "./Validaciones";
import { enviarMensaje } from "./Mensaje";
import { useMyContextGlobal } from "../../../context/global.context";

const Form = () => {
  const initialMensaje = { nombre: '', email: '' };
  const [mensaje, setMensaje] = useState(initialMensaje);
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);
  const { state } = useMyContextGlobal();
  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };

  const handleChange = evento => {
    const { name, value } = evento.target;
    setMensaje({ ...mensaje, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const resetForm = () => {
    setMensaje(initialMensaje);
    setErrors({});
    setEnviado(false);
  };

  const handleSubmit = evento => {
    evento.preventDefault();
    const validationErrors = validateFields(mensaje);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      enviarMensaje(mensaje);
      setEnviado(true);
      resetForm();
    }
  };

  return (
    <div className="contenedor-contacto">
      <form className={`form ${getThemeClass()}`} key={enviado ? 'enviado' : 'no-enviado'} onSubmit={handleSubmit}>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre y Apellido" onChange={handleChange} value={mensaje.nombre} />
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        <input type="email" id="email" name="email" placeholder="Tu Email" onChange={handleChange} value={mensaje.email} />
        {errors.email && <p className="error">{errors.email}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;