import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerUserMenu,
  UserContainer,
  LogoutButton,
  WelcomeUser,
  UserName,
} from './UserMenu.styled';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';
import { logOut } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  return (
    <ContainerUserMenu>
      <UserContainer>
        {isLoggedIn && (
          <WelcomeUser>
            Welcome <UserName>"{name}"</UserName>
          </WelcomeUser>
        )}
        <LogoutButton type="button" onClick={() => dispatch(logOut())}>
          Logout
        </LogoutButton>
      </UserContainer>
    </ContainerUserMenu>
  );
};
