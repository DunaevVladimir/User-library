export { 
  favoritesReducer,
  addToFavorites,
  deleteFromFavorites,
  clearFavorites,
  setFavoritesList,
  fetchFavorites,
  clear,
  setLoading
} from "./model/slice";

export { useFavorites } from "./lib/useFavorites";

export { favoritesMiddleware } from "./api/favoritesMiddleware";