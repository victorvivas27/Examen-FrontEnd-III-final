import "./Card.css"


const Card = ({ dentista }) => {

  //console.log(dentista);
  return (
    <div className="card">
      <img src={dentista.imagenUrl} alt={dentista.name} />
      <h3>{dentista.name}</h3>
      <h4>Username: {dentista.username}</h4>
    </div>
  );
};

export default Card;
