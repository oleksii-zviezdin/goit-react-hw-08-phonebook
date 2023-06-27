import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import {
  FormRegister,
  LableFormRegister,
  RegisterButton,
  Input,
  ButtonContainer,
} from './RegisterForm.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password)
      return toast.info(`All form fields must be filled out`);
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    setName('');
    setMail('');
    setPassword('');
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LableFormRegister>
        Name
        <Input
          autoComplete="current-name"
          placeholder="Type your name..."
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
        />
      </LableFormRegister>
      <LableFormRegister>
        Email
        <Input
          autoComplete="current-email"
          placeholder="Type your email..."
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
      </LableFormRegister>
      <LableFormRegister>
        Password
        <Input
          autoComplete="current-password"
          placeholder="Type your password..."
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
      </LableFormRegister>
      <ButtonContainer>
        <RegisterButton type="submit">Register</RegisterButton>
      </ButtonContainer>
    </FormRegister>
  );
};
