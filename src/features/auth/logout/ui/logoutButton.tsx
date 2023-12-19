import { Button } from "@/shared/ui/button/button";
import { useDispatch } from 'react-redux';
import { clearSession } from "@/entities/session";

export function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(clearSession())}>Выход</Button>
  );
}