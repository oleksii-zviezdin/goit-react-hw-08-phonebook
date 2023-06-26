import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import {
  FormLogin,
  LableFormLogin,
  LoginButton,
  ButtonContainer,
  Input,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form;
    if (!email.value || !password.value) return;
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
        <Input type="email" name="email" />
      </LableFormLogin>
      <LableFormLogin>
        Password
        <Input type="password" name="password" />
      </LableFormLogin>
      <ButtonContainer>
        <LoginButton type="submit">Log In</LoginButton>
      </ButtonContainer>
    </FormLogin>
  );
};
