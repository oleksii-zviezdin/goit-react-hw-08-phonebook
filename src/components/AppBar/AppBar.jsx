import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { ContainerAppBar, AppBarCSS } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ContainerAppBar>
      <AppBarCSS>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarCSS>
    </ContainerAppBar>
  );
};
