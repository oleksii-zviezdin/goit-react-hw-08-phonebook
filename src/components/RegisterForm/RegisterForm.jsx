import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  FormRegister,
  LableFormRegister,
  RegisterButton,
  Input,
  ButtonContainer,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form;
    if (!name.value || !email.value || !password.value) return;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LableFormRegister>
        Username
        <Input type="text" name="name" />
      </LableFormRegister>
      <LableFormRegister>
        Email
        <Input type="email" name="email" />
      </LableFormRegister>
      <LableFormRegister>
        Password
        <Input type="password" name="password" />
      </LableFormRegister>
      <ButtonContainer>
        <RegisterButton type="submit">Register</RegisterButton>
      </ButtonContainer>
    </FormRegister>
  );
};
