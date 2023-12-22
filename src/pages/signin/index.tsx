import { useCallback, useState } from "react";
import { LoginForm } from "@/widgets/loginForm";
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/button";
import { Input } from "@/shared/ui/input/input";
import { useDispatch } from 'react-redux';
import { setUser } from "@/entities/session";
import { User } from "@/entities/session";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });

  const clearErrors = useCallback(() => {
    setErrors({
      emailError: '',
      passwordError: ''
    })
  }, []);

  const onChange = useCallback((value: string, name: string) => {
    setData(prevData => ({...prevData, [name]: value}));
  }, []);

  const onFocus = useCallback(() => {
    clearErrors();
  }, []);

  const onSubmit = useCallback(() => {
    let user: User = JSON.parse(localStorage.getItem('users')!).find((item: User) => item.email === data.email);
    if (user) {
      if (user?.password === data.password) {
        localStorage.setItem('currentUser', JSON.stringify(data.email));
        dispatch(setUser({email: data.email}));
        navigate('/');
      } else {
        setErrors({
          emailError: '',
          passwordError: 'Неправильно введен пароль'
        })
      }
    } else {
      setErrors({
        emailError: 'Нет пользователя с такой почтой',
        passwordError: ''
      })
    }
  }, [data]);

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