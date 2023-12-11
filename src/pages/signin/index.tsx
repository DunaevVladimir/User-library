import { useCallback, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { useDispatch } from 'react-redux';
import { setUser } from "@/entities/session";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const callbacks = {
    onChange: useCallback((value: string, name: string) => {
      setData(prevData => ({...prevData, [name]: value}));
    }, []),
    onSubmit: useCallback(() => {
      localStorage.setItem('currentUser', JSON.stringify(data.email));
      dispatch(setUser({email: data.email}));
      navigate('/');
    }, [data])
  };

  return (
    <LoginForm onSubmit={callbacks.onSubmit}>
      <Input onChange={callbacks.onChange} type="email" placeholder="Email" name="email" currentValue={data.email}/>
      <Input onChange={callbacks.onChange} type="password" placeholder="Password" name="password" currentValue={data.password}/>
      <Button type="submit">Sign in</Button>
    </LoginForm>
  );
};