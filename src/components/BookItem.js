import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function BookItem({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="d-flex book-info border-grey bg-white">
      <div className="book-detail w-50c">
        <div>
          <div className="book-category txt-dark">{book.category}</div>
          <div className="book-title txt-dark capitalize">{book.title}</div>
          <div className="author text-blue">{book.author}</div>
        </div>
        <div className="d-flex book-feedback w-50c">
          <button type="button" className="text-blue btn-action line pointer">
            Comment
          </button>
          <button
            onClick={() => {
              dispatch(deleteBook(book.item_id));
            }}
            type="button"
            className="text-blue btn-action line pd-l10 pointer"
          >
            Remove
          </button>
          <button
            type="button"
            className="text-blue btn-action line pd-l10 pointer"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="d-flex progress w-50c">
        <div className="d-flex w-50c progress-bar">
          <div className="spin-container">
            <div className="spin">{}</div>
          </div>
          <div>
            <div className="rating txt-dark">74%</div>
            <div className="status">completed</div>
          </div>
        </div>
        <div className="w-50c progress-info">
          <div className="progress-stat">Current</div>
          <div className="chapter txt-dark">Chapter 18</div>
          <button className="btn-progress bg-primary txt-upper" type="button">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default BookItem;
