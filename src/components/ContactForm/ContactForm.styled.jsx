import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  outline: 1px solid #0460f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgb(18 8 42);

  box-shadow: 0 0 8px 2px #6279ff94;

  &::after {
    content: '';
    background: linear-gradient(
      45deg,
      #001aff,
      #003bfb,
      #0c24ff,
      #fffb00,
      #fffb00,
      #fffb00,
      #001aff,
      #001aff,
      #001aff
    );
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    z-index: -99999;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    background-size: 400%;
    animation: glowing-button-85 35s linear infinite;
    transition: opacity 0.3s ease-in-out;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Span = styled.span`
  margin-right: 6px;
  font-weight: 600;
`;
export const Input = styled.input`
  border-radius: 4px;
  border: none;
  height: 24px;
  background-color: #6279ff;
  &:focus {
    outline: 1px solid #0460f5;
    box-shadow: 0 0 8px 3px #6279ff94;
  }
`;
export const AddButton = styled.button`
  width: 150px;
  height: 32px;

  user-select: none;
  margin-left: auto;
  margin-right: auto;
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

  input:invalid & {
    color: rgb(52, 44, 206);
  }
`;
