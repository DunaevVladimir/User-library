import {useEffect} from "react";
import {useNavigate } from "react-router-dom";
import { Spinner } from "@/shared/ui/spinner/spinner";
import { useAuth } from "@/entities/session";

type Props = {
  children: React.ReactNode,
  redirect: string,
}

export function Protected({children, redirect}: Props) {
  const isAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(redirect);
    }
  }, [isAuth]);

  if (!isAuth){  
    return <Spinner />
  } else {
    return children;
  }
}