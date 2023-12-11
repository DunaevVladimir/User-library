import s from './loginForm.module.scss';

type Props = {
  onSubmit: () => void,
  children: React.ReactNode
}

export function LoginForm({ onSubmit, children}: Props) {

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  return (
      <form onSubmit={handleSubmit} className={s.Form}>
        {children}
      </form>
  );
};