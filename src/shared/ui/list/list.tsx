import s from './list.module.scss';

type Props = {
  list: {
    key: string,
    title: string;
  }[]
}

export function List({list}: Props) {
  return (
    <ul>
      {
        list.map((item) => (
          <li key={item.key}>{item?.title}</li>
        ))
      }
    </ul>
  );
}

