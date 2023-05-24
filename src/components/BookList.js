import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BookList() {
  const { booksItem } = useSelector((store) => store.books);
  return (
    <>
      {booksItem.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </>
  );
}

export default BookList;
