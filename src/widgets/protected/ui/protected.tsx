import {useEffect} from "react";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { RootState } from "@/app/providers/store";
import { Spinner } from "@/shared/ui/spinner/spinner";

type Props = {
  children: React.ReactNode,
  redirect: string,
}

export function Protected({children, redirect}: Props) {
  const isAuth = useSelector((state: RootState) => state.session.isAuthorized);
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