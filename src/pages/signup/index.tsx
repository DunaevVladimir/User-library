import { useCallback, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { createUser } from "@/entities/session";
import { useDispatch } from 'react-redux';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

    const onChange = useCallback((value: string, name: string) => {
      setData(prevData => ({...prevData, [name]: value}));
    }, []);

    const onSubmit = useCallback(() => {
      dispatch(createUser({email: data.email, password: data.password}));
      navigate('/');
    }, [data]);

  return (
    <LoginForm onSubmit={onSubmit}>
      <Input onChange={onChange} type="email" placeholder="Email" name="email" currentValue={data.email}/>
      <Input onChange={onChange} type="password" placeholder="Password" name="password" currentValue={data.password}/>
      <Button type="submit">Sign up</Button>
    </LoginForm>
  );
};