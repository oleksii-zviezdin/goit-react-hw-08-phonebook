import styled from '@emotion/styled';

export const FormLogin = styled.form`
  width: 320px;
`;

export const LableFormLogin = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 32px;

  border-radius: 8px;
  border: none;

  background-color: #0460f5;
  color: rgb(18, 8, 42);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms, box-shadow 250ms;

  &:hover,
  &:focus {
    background-color: #2170ef;
    box-shadow: 0 0 8px 2px #6279ff;
  }
`;
