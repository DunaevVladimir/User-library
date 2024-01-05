import { useCallback, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { Error } from "@/shared/ui/error/error";
import { useDispatch } from 'react-redux';
import { successLogin } from "@/entities/session";
import { login } from "@/features/auth/login";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const clearError = useCallback(() => {
    setError('');
  }, []);

  const onChange = useCallback((value: string, name: string) => {
    setData(prevData => ({...prevData, [name]: value}));
  }, []);

  const onFocus = useCallback(() => {
    clearError();
  }, []);

  const onSubmit = useCallback(() => {
    login({email: data.email, password: data.password})
      .then(() => dispatch(successLogin({email: data.email, password: data.password})))
      .then(() => navigate('/'))
      .catch((err) => setError(err.message))
  }, [data]);

  return (
    <LoginForm onSubmit={onSubmit}>
      <Error text={error}/>
      <Input 
        onChange={onChange} 
        onFocus={onFocus}
        type="email" 
        placeholder="Email" 
        name="email" 
        currentValue={data.email} />
      <Input 
        onChange={onChange} 
        onFocus={onFocus}
        type="password" 
        placeholder="Password" 
        name="password" 
        currentValue={data.password} />
      <Button type="submit">Sign in</Button>
    </LoginForm>
  );
};