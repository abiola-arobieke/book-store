// import { useState } from 'react';
import BookList from './BookList';

function Books() {
  const books = [
    {
      id: 1,
      bookType: 'Action',
      title: 'The serial killer',
      author: 'Oyinkan Braithwaite',
      progress: 75,
      status: 'reading',
      page: 'chapter 18',
    },
    {
      id: 2,
      bookType: 'Drama',
      title: 'Things fall apart',
      author: 'Chinua Achebe',
      progress: 63,
      status: 'completed',
      page: 'chapter 10',
    },
    {
      id: 3,
      bookType: 'Play-wright',
      title: 'Welcome to lagos',
      author: 'Chibundu Onuzo',
      progress: 14,
      status: 'reading',
      page: 'page 12',
    },
  ];
  return <BookList booksProp={books} />;
}

export default Books;
