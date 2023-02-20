import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const LogOut = () => {
  const dispatch = useDispatch();

  return <button type="button" onClick={() => dispatch(logOut())}>logout</button>;
};
