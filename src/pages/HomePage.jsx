import { Notification } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selector';
import { HomeContainer } from 'components/App.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  return (
    <HomeContainer>
      {!isLoggedIn && <Notification message={'Please register or login'} />}
      {isLoggedIn && (
        <Notification
          message={`Welcome ${name}! Here you can add your favorite contacts. Go to the "contacts" tab and add your contacts`}
        />
      )}
    </HomeContainer>
  );
}
