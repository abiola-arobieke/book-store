import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ booksProp, removeBook }) {
  return (
    <>
      {booksProp.map((book) => (
        <BookItem key={book.id} book={book} removeBook={() => removeBook(book.id)} />
      ))}
    </>
  );
}

BookList.propTypes = {
  booksProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      progress: PropTypes.number,
      status: PropTypes.string,
      page: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookList;
