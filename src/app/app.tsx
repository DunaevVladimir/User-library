import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routing } from "@/pages";
import { setUser } from "@/entities/session";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem('currentUser');
    if (user) {
      dispatch(setUser({email: user}));
    }
  }, []);

  return (
    <Routing />
  );
}