import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id = {}),
  removerFavorite: (id = {}),
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMaelIds, setFavoriteMaelIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMaelIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMaelIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
