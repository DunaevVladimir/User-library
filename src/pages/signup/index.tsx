import { useCallback, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { setUser } from "@/entities/session";
import { useDispatch } from 'react-redux';

export default function Signup() {
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
      localStorage.setItem('users', JSON.stringify(data));
      localStorage.setItem('currentUser', JSON.stringify(data.email));
      dispatch(setUser({email: data.email}));
      navigate('/');
    }, [data])
  };

  return (
    <LoginForm onSubmit={callbacks.onSubmit}>
      <Input onChange={callbacks.onChange} type="email" placeholder="Email" name="email" currentValue={data.email}/>
      <Input onChange={callbacks.onChange} type="password" placeholder="Password" name="password" currentValue={data.password}/>
      <Button type="submit">Sign up</Button>
    </LoginForm>
  );
};