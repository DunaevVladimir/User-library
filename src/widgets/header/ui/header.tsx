import type { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import { Link } from '@/shared/ui/link/link';
import { LogoutButton } from '@/features/auth/logout';
import s from './header.module.scss';

export function Header() {
  const isAuth = useSelector((state: RootState) => state.session.isAuthorized);

  return (
    <header className={s.Header}>
       <nav className={s.Nav}>
        <Link path={'/'}>Главная</Link>
        {
          isAuth 
            ? <>
                <Link path={'/favorites'}>Избранное</Link>
                <Link path={'/history'}>История</Link>
                <LogoutButton />
              </>
            : 
              <>
                <Link path={'/signin'}>Войти</Link>
                <Link path={'/signup'}>Зарегистрироваться</Link>
              </>
        }
       </nav>
    </header>
  );
}