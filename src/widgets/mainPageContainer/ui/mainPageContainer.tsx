import { useState, useCallback, useMemo } from 'react';
import { useGetBooksQuery } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { Book } from '@/entities/books';
import { useSearchParams } from 'react-router-dom';
import { BookArticle } from '@/widgets/bookArticle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToHistory } from '@/entities/history';
import { generateId } from '../lib/generateId';

import s from './mainPageContainer.module.scss';

export function MainPageContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');

  const params = {
    q: searchParams.get('q') || 'language:rus',
  }

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(params);

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  const onSearch = useCallback(() => {
      if (input) {
        dispatch(addToHistory({title: input, link: `/search?q=${input}`, id: generateId()}));
        let history = JSON.parse(localStorage.getItem('history')!);
        if (!history) {
          history = [];
        }
        history = history.concat({title: input, link: `/search?q=${input}`, id: generateId()});
        localStorage.setItem('history', JSON.stringify(history));
        navigate(`search/?q=${input}`);
      }
  }, [input]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }, [onSearch]);

  const render = (book: Book) => { return <BookArticle book={book} /> }

  return (
    <main onKeyDown={onKeyDown} className={s.Content}>
      <div className={s.List}>
        <div className={s.SearchBar}>
          <Input onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
          <Button onClick={onSearch} className={s.Search}></Button>
        </div>
        {
          isLoading || isFetching
            ? <Spinner />
            : <List list={books.docs} renderItem={render} emptyText='Нет книг по вашим параметрам'/>
        }
      </div>
    </main>
  );
};