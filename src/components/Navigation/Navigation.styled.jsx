import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 32px;
  padding: 0px 12px 0px 12px;

  text-decoration: none;
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
