import s from './list.module.scss';

type Props = {
  list: {
    id: string,
    text: string
  }[]
}

export function List({list}: Props) {
  return (
    <ul>
      {
        list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))
      }
    </ul>
  );
}

