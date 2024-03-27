import axios from "axios";
const imgDentista = "/images/doctor.jpg";

export const obtenerTodos = async () => {
  const urlBase = "https://jsonplaceholder.typicode.com/users";
  const res = await axios.get(urlBase);
  const usuariosConImagen = res.data.map((usuario) => ({
    ...usuario,
    imagenUrl: imgDentista,
  }));
  return usuariosConImagen;
};
export const obtenerPorId = async (id) => {
  const urlBase = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await axios.get(urlBase);
  const usuariosConImagen = {
    ...res.data,
    imagenUrl: imgDentista,
  };
  return usuariosConImagen;
};
