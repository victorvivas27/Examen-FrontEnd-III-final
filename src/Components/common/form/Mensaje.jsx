import Swal from "sweetalert2";
import "./Mensaje.css";

export const enviarMensaje = (mensaje) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Gracias ${mensaje.nombre} por contactarnos te contactaremos cuando antes vía Email`,
    showConfirmButton: false,
    timer: 6500
  });
};