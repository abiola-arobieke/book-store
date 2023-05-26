import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from './components/Categories';
import Books from './components/Books';
import { getBooksItem } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksItem());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
