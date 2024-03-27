import "./Details.css"
import { useMyContextGlobal } from "../../../context/global.context"
import CardDetail from "../../common/carddetail/CardDetail"
import { useEffect, useState } from "react"
import { obtenerPorId } from "../../../api/apidentista/dentista"
import { useParams } from "react-router-dom"
import { Back } from "../../../utils/back-forward/Back"
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
const Detail = () => {
  const { id } = useParams()
  const [dentista, setDentista] = useState({})
  const { state, dispatch } = useMyContextGlobal()
  //console.log(state);
  useEffect(() => {
    const getDentistaId = async () => {
      const dentistaDataId = await obtenerPorId(id);
      setDentista(dentistaDataId)


    };
    getDentistaId();
    localStorage.setItem("favs", JSON.stringify(state.favs))

  }, [id, state.favs])
  const handleAddToFavorites = (dentista) => {
    const existingFav = state.favs.find((fav) => fav.id === dentista.id);
    if (!existingFav) {
      dispatch({ type: 'ADD_FAV', payload: dentista });
    }
  };


  return (
    <div className="conteiner-details">
      <div className="detail" >
        <CardDetail dentista={dentista} />
      </div>
      <span className="icon-favs-detail" onClick={() => handleAddToFavorites(dentista)}>
        {state.favs.some((fav) => fav.id === dentista.id) ? (
          <FavoriteRoundedIcon className="heart-favs" style={{ fontSize: 60, color: "red" }} />
        ) : (
          <FavoriteBorderRoundedIcon style={{ fontSize: 60, color: "red" }} />
        )}
      </span>
      <Back />
    </div>
  )
}

export default Detail