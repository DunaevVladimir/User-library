import { useState, useCallback, useEffect } from 'react';
import { useGetBooksQuery, Book, BookItem, fetchBooks } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button/button';
import { Pagination } from '@/shared/ui/pagination/pagination';
import { useSearchParams } from 'react-router-dom';
import { BookArticle } from '@/widgets/bookArticle';
import { useDebounce } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '@/entities/history';
import { generateId } from '@/widgets/mainPageContainer/lib/generateId';
import { AppDispatch, RootState } from '@/app/providers/store';
import s from './searchPageContainer.module.scss';

export function SearchPageContainer() {
  const booksList = useSelector((state: RootState) => state.books.bookList);
  const booksLoading = useSelector((state: RootState) => state.books.isLoading);
  const booksCount = useSelector((state: RootState) => state.books.count);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');
  const [isSuggests, setIsSuggests] = useState<boolean>(false);
  const [isSuggestsFocus, setIsSuggestsFocus] = useState<boolean>(false);
  const debouncedValue = useDebounce<string>(input, 500);
  const dispatch = useDispatch<AppDispatch>();
  const [params, setParams] = useState({
    q: debouncedValue || 'language:rus',
    limit: 10,
    page: 1,
    fields: 'key, title'
  })

  const suggestsParams = {
    q: debouncedValue || 'language:rus',
    limit: 5,
  }

  useEffect(() => {
    dispatch(fetchBooks(params));
  }, [params]);

  const { data: books = {docs: []}, isLoading , isFetching} = useGetBooksQuery(suggestsParams);

  const onChange = useCallback((value: string) => {
    setInput(value);
  }, [input]);

  //@ Устанавливаем параметры в поисковую строку и URL
  const onSearch = useCallback(() => {
    if (input) {
      dispatch(addToHistory({title: input, link: `/search?q=${input}`, id: generateId()}));
      setSearchParams({q: input});
      setIsSuggests(false);
      setParams({
        ...params,
        q: input,
        page: 1,
      })
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
    if (!isSuggestsFocus) {
      setIsSuggests(false);
    }
  }, [isSuggestsFocus]);

  const onFocus = useCallback(() => {
    if (!isSuggestsFocus) {
      setIsSuggests(true);
    }
  }, [isSuggestsFocus]);

  const onChangePage = useCallback((page: number) => {
    setParams({
      ...params,
      page: page
    })
  }, [params]);

  const render = (book: Book) => { return <BookArticle book={book} /> };
  const sagest = (book: Book) => { return <BookItem book={book} /> };

  return (
    <main onKeyDown={onKeyDown} className={s.Content}>
      <div className={s.List}>
        <div className={s.SearchBar}>
          <Input onFocus={onFocus} onBlur={onBlur} onChange={onChange} type="text" placeholder="Поиск" name="query" currentValue={input} />
          <Button onClick={onSearch} className={s.Search}></Button>
          {
            input && isSuggests &&
              <div className={s.Sagests} onMouseEnter={() =>setIsSuggestsFocus(true)} onMouseLeave={() => setIsSuggestsFocus(false)}>
                <List list={books.docs} renderItem={sagest} emptyText='Нет книг по вашим параметрам'/>
              </div>
          }
        </div>
        {
          booksLoading
            ? <Spinner />
            : <>
                <List list={booksList} renderItem={render} emptyText='Нет книг по вашим параметрам'/>
                <Pagination currentPage={params.page} count={booksCount} limit={params.limit} onChangePage={onChangePage}/>
              </>
        }
      </div>
    </main>
  );
};