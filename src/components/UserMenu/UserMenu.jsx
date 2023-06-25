import { useDispatch, useSelector } from 'react-redux';
import {
  LogoutButton,
  // UserMenuCSS,
  ContainerUserMenu,
} from './UserMenu.styled';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';
import { logOut } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  console.log(isLoggedIn);
  console.log(name);
  return (
    <ContainerUserMenu>
      {/* <UserMenuCSS> */}
      {isLoggedIn && <p>Welcome {name}</p>}
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
      {/* </UserMenuCSS> */}
    </ContainerUserMenu>
  );
};