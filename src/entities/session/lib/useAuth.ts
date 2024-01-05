import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.session.userEmail);

  return user ? true : false
}