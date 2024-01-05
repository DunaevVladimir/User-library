import { useState, useCallback, useEffect } from 'react';
import { useGetBooksQuery, fetchBooks, Book, BookItem } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { useSearchParams } from 'react-router-dom';
import { BookArticle } from '@/widgets/bookArticle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '@/entities/history';
import { generateId } from '../lib/generateId';
import { useDebounce } from 'usehooks-ts';
import { RootState, AppDispatch } from '@/app/providers/store';
import s from './mainPageContainer.module.scss';

export function MainPageContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const booksList = useSelector((state: RootState) => state.books.bookList);
  const booksLoading = useSelector((state: RootState) => state.books.isLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');
  const [isSagests, setIsSagests] = useState<boolean>(false);
  const [isSagestsFocus, setIsSagestsFocus] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(input, 500);

  const params = {
    q: debouncedValue || 'language:rus',
    limit: '5',
  }

  useEffect(() => {
    dispatch(fetchBooks({
      q: input || 'language:rus',
      limit: 10,
      fields: 'key, title',
    }));
  }, []);

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(params);

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  const onSearch = useCallback(() => {
      if (input) {
        dispatch(addToHistory({title: input, link: `/search?q=${input}`, id: generateId()}));
        navigate(`search/?q=${input}`);
      }
  }, [input]);

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

  const render = (book: Book) => { return <BookArticle book={book} /> }
  const sagest = (book: Book) => { return <BookItem book={book} /> };

  return (
    <main onKeyDown={onKeyDown} className={s.Content}>
      <div className={s.List}>
        <div className={s.SearchBar}>
          <Input onFocus={onFocus} onBlur={onBlur} onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
          <Button onClick={onSearch} className={s.Search}></Button>
          {
            input && isSagests &&
              <div className={s.Sagests} onMouseEnter={() => setIsSagestsFocus(true)} onMouseLeave={() => setIsSagestsFocus(false)}>
                <List list={books.docs} renderItem={sagest} emptyText='Нет книг по вашим параметрам'/>
              </div>
          }
        </div>
        {
          booksLoading
            ? <Spinner />
            : <List list={booksList} renderItem={render} emptyText='Нет книг по вашим параметрам'/>
        }
      </div>
    </main>
  );
};