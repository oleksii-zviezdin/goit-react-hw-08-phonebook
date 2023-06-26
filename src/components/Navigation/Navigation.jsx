import { useAuth } from 'hooks';
import { Link, LinkContainer } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <LinkContainer>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </LinkContainer>
  );
};
