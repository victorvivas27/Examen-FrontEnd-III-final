import React, { useState } from 'react';
import { useMyContextGlobal } from '../../../context/global.context';
import Card from '../../common/card/Card';
import './Favs.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Swal from 'sweetalert2';
import { Back } from '../../../utils/back-forward/Back';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Favs = () => {
  const { state, dispatch } = useMyContextGlobal();
  const [showTooltip, setShowTooltip] = useState(false);

  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };

  const handleClearAll = (dentista) => {
    if (state.favs.length > 0) {
      Swal.fire({
        title: 'Eliminar todos los favoritos',
        text: '¿Estás seguro de que deseas eliminar todos los favoritos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar todo',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Eliminados', 'Se han eliminado todos los favoritos.', 'success');
          dispatch({ type: 'REMOVE_ALL' });
          dispatch({ type: 'REMOVE_BY_ID', payload: dentista.id });
        }
      });
    }
  };

  const handleTooltipEnter = () => {
    setShowTooltip(true);
  };

  const handleTooltipLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div className='dentista-favs'>
        {state.favs.map((dentista) => (
          <div key={dentista.id} className='container-favs'>
            <span className='fav-icon ' onClick={() => handleClearFav(dentista)}>
              <FavoriteRoundedIcon className='heart-favs' style={{ fontSize: 60, color: "red" }} />
            </span>
            <Card dentista={dentista} />
          </div>
        ))}
      </div>
      <div className='container-button-limpiar-back'>
        <Back />
        <div
          className={`button-limpiar ${getThemeClass()}`}
          onClick={handleClearAll}
          onMouseEnter={handleTooltipEnter}
          onMouseLeave={handleTooltipLeave}
        >
          <DeleteForeverRoundedIcon   style={{ fontSize: 60 }}/>
          {showTooltip && <span className="tooltip">Eliminar todos los favoritos</span>}
        </div>
      </div>
    </>
  );
};

export default Favs;