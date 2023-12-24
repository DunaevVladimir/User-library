import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routing } from "@/pages";
import { setUser } from "@/entities/session";
import { setFavoritesList } from "@/entities/favorites";
import { setHistoryList } from "@/entities/history";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem('currentUser');
    if (user) {
      dispatch(setUser({email: user}));
    }
    let favoritesList = JSON.parse(localStorage.getItem('favorites')!);
    if (favoritesList) {
      dispatch(setFavoritesList(favoritesList));
    }
    let historyList = JSON.parse(localStorage.getItem('history')!);
    if (historyList) {
      dispatch(setHistoryList(historyList));
    }
  }, []);

  return (
    <Routing />
  );
}