import s from './pageLayout.module.scss';

type Props = {
  children: React.ReactNode,
  title?: string,
}

export function PageLayout({children, title}: Props) {
  return (
    <div className={s.PageLayout}>
      <h1 className={s.Title}>{title}</h1>
      {children}
    </div>
  );
}