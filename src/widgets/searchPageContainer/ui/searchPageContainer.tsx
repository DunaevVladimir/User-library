import { useState, useCallback } from 'react';
import { useGetBooksQuery } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { Book, BookItem } from '@/entities/books';
import { useSearchParams } from 'react-router-dom';
import { BookArticle } from '@/widgets/bookArticle';
import { useDebounce } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import { addToHistory } from '@/entities/history';
import { generateId } from '@/widgets/mainPageContainer/lib/generateId';
import s from './searchPageContainer.module.scss';

export function SearchPageContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');
  const [isSagests, setIsSagests] = useState<boolean>(false);
  const [isSagestsFocus, setIsSagestsFocus] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(input, 500);
  const dispatch = useDispatch();

  const params = {
    q: debouncedValue || 'language:rus',
    limit: 5,
  }

  const params2 = {
    q: 'language:rus',
    limit: 5,
  }

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(params);

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  //@ Устанавливаем параметры в поисковую строку и URL
  const onSearch = useCallback(() => {
    if (input) {
      dispatch(addToHistory({title: input, link: `/search?q=${input}`, id: generateId()}));
      setSearchParams({q: input});
      setIsSagests(false);
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

  const onBlur = useCallback(() => {
    if (!isSagestsFocus) {
      setIsSagests(false);
    }
  }, [isSagestsFocus]);

  const onFocus = useCallback(() => {
    if (!isSagestsFocus) {
      setIsSagests(true);
    }
  }, [isSagestsFocus]);

  const render = (book: Book) => { return <BookArticle book={book} /> };
  const sagest = (book: Book) => { return <BookItem book={book} /> };

  return (
    <main onKeyDown={onKeyDown} className={s.Content}>
      <div className={s.List}>
        <div className={s.SearchBar}>
          <Input onFocus={onFocus} onBlur={onBlur} onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
          <Button onClick={onSearch} className={s.Search}></Button>
          {
            input && isSagests &&
              <div className={s.Sagests} onMouseEnter={() =>setIsSagestsFocus(true)} onMouseLeave={() => setIsSagestsFocus(false)}>
                <List list={books.docs} renderItem={sagest} emptyText='Нет книг по вашим параметрам'/>
              </div>
          }
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