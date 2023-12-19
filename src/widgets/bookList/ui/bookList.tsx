import { useState, useCallback, useEffect } from 'react';
import { useGetBooksQuery } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import s from './bookList.module.scss';
import { useSearchParams } from 'react-router-dom';

export function BookList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [params, setParams] = useState({
    q: 'language:rus',
    limit: 10,
  });

  //@ Забираем параметр q из URL и добавляем к params и в input
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setParams({
        ...params,
        q: q
      });
    setInput(q);
    }
  }, [])

  const [input, setInput] = useState('');

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(params, { skip: !params.q});

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  //@ Устанавливаем параметры в поисковую строку и URL
  const onSearch = useCallback(() => {
    setParams({
      ...params,
      q: input
    });
    if (input) {
      setSearchParams({q: input});
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  }, [input, params, searchParams]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }, [onSearch])

  return (
    <>
      <div onKeyDown={onKeyDown} className={s.Content}>
        <div className={s.List}>
          <div className={s.SearchBar}>
            <Input onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
            <Button onClick={onSearch} className={s.Search}></Button>
          </div>
          {
            isLoading || isFetching
              ? <Spinner />
              : <List list={books.docs}/>
          }
        </div>
      </div>
    </>
  );
};