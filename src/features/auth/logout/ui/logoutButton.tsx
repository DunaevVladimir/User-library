import { Button } from "@/shared/ui/button/button";
import { useDispatch } from 'react-redux';
import { logout } from "@/entities/session";
import { setFavoritesList } from "@/entities/favorites";
import { setHistoryList } from "@/entities/history";

export function LogoutButton() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(setFavoritesList([]));
    dispatch(setHistoryList([]));
  }

  return (
    <Button onClick={onLogout}>Выход</Button>
  );
}