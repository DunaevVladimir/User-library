import { Button } from "@/shared/ui/button/button";
import { useNavigate } from "react-router-dom";
import s from './backButton.module.scss';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} className={s.Back}>Назад</Button>
  );
}