import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const ContainerUserMenu = styled.header`
  position: sticky;
`;

export const UserMenuCSS = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
  background-color: rgb(18 8 42);
  box-shadow: 0 0 10px 5px #001aff;
`;

export const LogoutButton = styled.button`
  width: 50%;
  height: 32px;

  border-radius: 8px;
  border: none;

  background-color: #0460f5;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms, box-shadow 250ms;

  &:hover,
  &:focus {
    background-color: #2170ef;
    box-shadow: 0 0 8px 2px #6279ff;
  }
`;

export const WelcomeUser = styled.p`
  text-align: center;
  font-size: 0.835rem;
  width: 50%;
  font-weight: 600;
`;

export const UserName = styled.span`
  text-align: center;
  font-size: 0.835rem;
  width: 50%;
  font-weight: 600;
  color: #ffffff;
`;
