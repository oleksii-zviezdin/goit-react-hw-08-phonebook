import { Notification } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';
import { selectItems } from 'redux/contacts/selector';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const items = useSelector(selectItems);
  return (
    <div>
      {!isLoggedIn && <Notification message={'Please register or login'} />}
      {items?.length === 0 && isLoggedIn && (
        <Notification
          message={'This is where your added contacts will be displayed'}
        />
      )}
    </div>
  );
}
