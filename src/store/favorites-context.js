import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: AddFavoriteHandler,
    removeFavorite: RemoveFavoriteHandler,
    isFavorite: IsFavoriteHandler
  };

  function AddFavoriteHandler(favoriteMeetup) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.concat(favoriteMeetup);
    });
  }

  function RemoveFavoriteHandler(id) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.filter(meetup => meetup.id !== id);
    });
  }

  function IsFavoriteHandler(id) {
    return userFavorites.some(meetup => meetup.id === id)
  }

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
