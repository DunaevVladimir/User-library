import s from './pageLayout.module.scss';

type Props = {
  children: React.ReactNode
}

export function PageLayout({children}: Props) {
  return (
    <div className={s.PageLayout}>
      {children}
    </div>
  );
}