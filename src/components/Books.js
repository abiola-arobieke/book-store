import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import BookList from './BookList';
import InputBooks from './InputBook';

function Books() {
  const [books, setBook] = useState([
    {
      id: '1',
      category: 'Action',
      title: 'The serial killer',
      author: 'Oyinkan Braithwaite',
      progress: 75,
      status: 'reading',
      page: 'chapter 18',
    },
    {
      id: '2',
      category: 'Drama',
      title: 'Things fall apart',
      author: 'Chinua Achebe',
      progress: 63,
      status: 'completed',
      page: 'chapter 10',
    },
    {
      id: '3',
      category: 'Play-wright',
      title: 'Welcome to lagos',
      author: 'Chibundu Onuzo',
      progress: 14,
      status: 'reading',
      page: 'page 12',
    },
  ]);

  const handleRemove = (id) => {
    setBook([...books.filter((book) => book.id !== id)]);
  };

  const addBook = (title, category) => {
    const newBook = {
      id: uuidv4(4),
      category,
      title,
      author: 'John Doe',
      progress: 25,
      status: 'completed',
      page: 'chapter 1',
    };
    setBook([...books, newBook]);
  };
  return (
    <div className="bg-grey-light">
      <BookList booksProp={books} removeBook={handleRemove} />
      <InputBooks addNewBook={addBook} />
    </div>
  );
}

export default Books;
