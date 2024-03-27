import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../common/card/Card';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useMyContextGlobal } from '../../../context/global.context';
import { obtenerTodos } from '../../../api/apidentista/dentista';
import "./Home.css"
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useMyContextGlobal();
  //console.log(data);

  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };

  useEffect(() => {
    const getDentista = async () => {
      const dentistaData = await obtenerTodos();
      setData(dentistaData);

    };
    localStorage.setItem("favs", JSON.stringify(state.favs))
    getDentista();
  }, [state.favs]);

  const handleAddToFavorites = (dentista) => {
    const existingFav = state.favs.find((fav) => fav.id === dentista.id);
    if (!existingFav) {
      dispatch({ type: 'ADD_FAV', payload: dentista });
    }
  };

  return (

    <main className="card-grid">
      {data.map((dentista) => (
        <div key={dentista.id} className='card-container'>
          <span onClick={() => handleAddToFavorites(dentista)}>
            {state.favs.some((fav) => fav.id === dentista.id) ? (
              <FavoriteRoundedIcon className='icon-fav heart-favs' style={{ fontSize: 60,color: "red"  }} />
            ) : (
              <FavoriteBorderRoundedIcon className='icon-fav ' style={{ fontSize: 60,color: "red"  }} />
            )}
          </span>
          <Card dentista={dentista} />
          <span className={`mas-info ${getThemeClass()}`}>
            <NavLink to={`/detail/${dentista.id}`} className={`card-title ${getThemeClass}`}>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: 20 }} /> : {dentista.name}
            </NavLink>
          </span>
        </div>
      ))}
    </main>

  );
};

export default Home;