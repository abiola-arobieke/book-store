import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Books() {
  return (
    <div className="d-flex book-info container">
      <div className="book-detail w-50c">
        <div>
          <div className="book-category">Action</div>
          <div className="book-title">Hunger Games</div>
          <div className="author text-blue">Susan Spat</div>
        </div>
        <div className="d-flex book-feedback w-50c">
          <button type="button" className="text-blue btn-action line">
            Comment
          </button>
          <button type="button" className="text-blue btn-action line pd-l10">
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
            <div className="rating">64%</div>
            <div>Completed</div>
          </div>
        </div>
        <div className="w-50c progress-info">
          <div className="progress-stat">Current</div>
          <div className="chapter">Chapter 17</div>
          <button className="btn-progress" type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

export default Books;
