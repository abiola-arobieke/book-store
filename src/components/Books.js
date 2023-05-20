import { useState } from 'react';
import BookList from './BookList';

function Books() {
  const [books, setBook] = useState([
    {
      id: 1,
      category: 'Action',
      title: 'The serial killer',
      author: 'Oyinkan Braithwaite',
      progress: 75,
      status: 'reading',
      page: 'chapter 18',
    },
    {
      id: 2,
      category: 'Drama',
      title: 'Things fall apart',
      author: 'Chinua Achebe',
      progress: 63,
      status: 'completed',
      page: 'chapter 10',
    },
    {
      id: 3,
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
  return <BookList booksProp={books} removeBook={handleRemove} />;
}

export default Books;
