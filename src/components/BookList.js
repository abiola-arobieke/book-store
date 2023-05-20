import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ booksProp }) {
  return (
    <>
      {booksProp.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
}

BookList.propTypes = {
  booksProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      progress: PropTypes.number,
      status: PropTypes.string,
      page: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
