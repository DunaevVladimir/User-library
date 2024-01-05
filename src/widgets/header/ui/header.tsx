import { Link } from '@/shared/ui/link/link';
import { LogoutButton } from '@/features/auth/logout';
import s from './header.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/app/providers/themeContext';
import { useAuth } from '@/entities/session';

export function Header() {
  const isAuth = useAuth();
  const theme = useContext(ThemeContext);

  return (
    <header className={s.Header} style={{ background: theme.backgroundColor, color: theme.color }}>
       <nav className={s.Nav}>
        <Link path={'/'} text="Главная"></Link>
        {
          isAuth 
            ? <>
                <Link path={'/favorites'} text="Избранное"></Link>
                <Link path={'/history'} text="История"></Link>
                <LogoutButton />
              </>
            : 
              <>
                <Link path={'/signin'} text="Войти"></Link>
                <Link path={'/signup'} text="Зарегистрироваться"></Link>
              </>
        }
       </nav>
    </header>
  );
}