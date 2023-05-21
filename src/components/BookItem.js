import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function BookItem({ book, removeBook }) {
  return (
    <div className="d-flex book-info container">
      <div className="book-detail w-50c">
        <div>
          <div className="book-category">{book.category}</div>
          <div className="book-title">{book.title}</div>
          <div className="author text-blue">{book.author}</div>
        </div>
        <div className="d-flex book-feedback w-50c">
          <button type="button" className="text-blue btn-action line">
            Comment
          </button>
          <button onClick={removeBook} type="button" className="text-blue btn-action line pd-l10">
            Remove
          </button>
          <button type="button" className="text-blue btn-action line pd-l10">
            Edit
          </button>
        </div>
      </div>
      <div className="d-flex progress w-50c">
        <div className="d-flex w-50c progress-bar">
          <FontAwesomeIcon icon={faCircleNotch} />
          <div>
            <div className="rating">
              {book.progress}
              %
            </div>
            <div>{book.status}</div>
          </div>
        </div>
        <div className="w-50c progress-info">
          <div className="progress-stat">Current</div>
          <div className="chapter">{book.page}</div>
          <button className="btn-progress" type="button">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
