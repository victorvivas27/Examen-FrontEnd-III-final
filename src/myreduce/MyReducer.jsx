
const localStorageFavs = JSON.parse(localStorage.getItem('favs'));
//console.log(lsFavs);
export const initialState = {
  theme: false,
  icontheme: false,
  favs: localStorageFavs || [],
  iconfavs: false,
  iconmenu: false,
  menu: false,
  themenavbar: false,
};

export const MyReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: !state.theme, icontheme: !state.icontheme, themenavbar: !state.themenavbar };


    case 'ADD_FAV':
      const existingFavs = state.favs.find(fav => fav.id === action.payload.id);
      if (existingFavs) {
        return state; // No se agrega el favorito si ya existe
      } else {
        return {
          ...state, favs: [...state.favs, { ...action.payload }], iconfavs: !state.iconfavs,
        };
      };

    case 'REMOVE_ALL':
      return { ...state, favs: [] };

    case 'REMOVE_BY_ID':
      const newArray = state.favs.filter(producto => producto.id !== action.payload);
      return { ...state, favs: newArray }



    default: return state;
  };
};