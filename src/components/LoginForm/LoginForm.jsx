import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import {
  FormLogin,
  LableFormLogin,
  LoginButton,
  ButtonContainer,
  Input,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form;
    if (!email.value || !password.value)
      toast.info(`All form fields must be filled out`);
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LableFormLogin>
        Email
        <Input
          autoComplete="current-email"
          placeholder="Type your email..."
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
      </LableFormLogin>
      <LableFormLogin>
        Password
        <Input
          autoComplete="current-password"
          placeholder="Type your password..."
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
      </LableFormLogin>
      <ButtonContainer>
        <LoginButton type="submit">Log In</LoginButton>
      </ButtonContainer>
    </FormLogin>
  );
};
