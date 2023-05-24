import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

function InputBooks() {
  const categories = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Drama' },
    { id: 3, name: 'Play-wright' },
    { id: 4, name: 'Thriller' },
  ];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category) {
      const newBook = {
        item_id: uuidv4(4),
        category,
        title,
        author: 'John Doe',
      };
      dispatch(addBook(newBook));
    }
  };

  return (
    <div className="md-6 form-input">
      <div className="form-title">Add New Book</div>
      <form className="d-flex w-100c spc-btw form" onSubmit={handleSubmit}>
        <input
          className="w-60c text-input"
          type="text"
          onChange={handleInput}
          placeholder="BOOK TITLE"
        />
        <select
          className="w-30c cat grey-light"
          name="choice"
          onChange={handleChange}
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="w-20c btn-add" type="submit">
          Add book
        </button>
      </form>
    </div>
  );
}

export default InputBooks;
