import { useState, useCallback, useMemo } from 'react';
import { useGetBooksQuery } from '@/entities/books';
import { useSelector } from 'react-redux'
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { ChangedBook } from '@/entities/books';
import s from './bookList.module.scss';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '@/app/providers/store';
import { BookArticle } from '@/widgets/bookArticle';

export function BookList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');
  const favoritesList = useSelector((state: RootState) => state.favorites.list);

  const params = useMemo(() => {
    return {
      q: searchParams.get('q') || 'language:rus',
    }
  }, [searchParams]);

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(params);
  const changedBooks = useMemo(() => {
    return books.docs.map((item: ChangedBook) => {
      if (favoritesList.includes(item.key)) {
        return {...item, isAdded: true}
      } else {
        return {...item, isAdded: false}
      }
    })
  }, [books, favoritesList]);

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  //@ Устанавливаем параметры в поисковую строку и URL
  const onSearch = useCallback(() => {
    if (input) {
      setSearchParams({q: input});
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  }, [input, searchParams]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }, [onSearch]);

  const render = (book: ChangedBook) => { return <BookArticle book={book} /> }

  return (
    <>
      <main onKeyDown={onKeyDown} className={s.Content}>
        <div className={s.List}>
          <div className={s.SearchBar}>
            <Input onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
            <Button onClick={onSearch} className={s.Search}></Button>
          </div>
          {
            isLoading || isFetching
              ? <Spinner />
              : <List list={changedBooks} renderItem={render}/>
          }
        </div>
      </main>
    </>
  );
};