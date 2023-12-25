export { 
  favoritesReducer,
  addToFavorites,
  deleteFromFavorites,
  clearFavorites,
  setFavoritesList
} from "./model/slice";

export { useFavorites } from "./lib/useFavorites";

export { favoritesMiddleware } from "./api/favoritesMiddleware";