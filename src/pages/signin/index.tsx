import { useCallback, useEffect, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { useDispatch } from 'react-redux';
import { login, setErrors } from "@/entities/session";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.session.errors);

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const clearErrors = useCallback(() => {
    dispatch(setErrors({
      emailError: '',
      passwordError: ''
    }));
  }, []);

  const onChange = useCallback((value: string, name: string) => {
    setData(prevData => ({...prevData, [name]: value}));
  }, []);

  const onFocus = useCallback(() => {
    clearErrors();
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(login({email: data.email, password: data.password}));
    nav();
  }, [data, errors]);

  const nav = useCallback(() => {
    if (!errors.emailError && !errors.passwordError) {
      navigate('/');
      clearErrors();
    }
  }, [errors]);

  return (
    <LoginForm onSubmit={onSubmit}>
      <Input 
        onChange={onChange} 
        onFocus={onFocus}
        type="email" 
        placeholder="Email" 
        name="email" 
        currentValue={data.email} 
        error={errors.emailError} />
      <Input 
        onChange={onChange} 
        onFocus={onFocus}
        type="password" 
        placeholder="Password" 
        name="password" 
        currentValue={data.password} 
        error={errors.passwordError} />
      <Button type="submit">Sign in</Button>
    </LoginForm>
  );
};