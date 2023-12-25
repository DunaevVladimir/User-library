import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routing } from "@/pages";
import { setUser } from "@/entities/session";
import { setFavoritesList } from "@/entities/favorites";
import { setHistoryList } from "@/entities/history";
import { remindSession } from "@/entities/session";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(remindSession());
  }, []);

  return (
    <Routing />
  );
}