import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  FormRegister,
  LableFormRegister,
  RegisterButton,
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
        <input type="text" name="name" />
      </LableFormRegister>
      <LableFormRegister>
        Email
        <input type="email" name="email" />
      </LableFormRegister>
      <LableFormRegister>
        Password
        <input type="password" name="password" />
      </LableFormRegister>
      <RegisterButton type="submit">Register</RegisterButton>
    </FormRegister>
  );
};
