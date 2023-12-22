import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '@/entities/books';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { BookCard } from '@/widgets/bookArticlee';

export default function Book() {
  const { type, id } = useParams();

  const { data: book = {}, isLoading , isFetching} = useGetBookByIdQuery({type, id});

  return (
    <>
        {  
          isLoading || isFetching
            ? <Spinner />
            : <BookCard book={book} />
        }
    </>
  );
}