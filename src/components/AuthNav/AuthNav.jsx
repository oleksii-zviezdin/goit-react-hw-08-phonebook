import { Link, LinkContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <LinkContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </LinkContainer>
  );
};
