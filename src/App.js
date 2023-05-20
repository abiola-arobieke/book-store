import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';
import InputBooks from './components/InputBook';

function App() {
  return (
    <div className="co">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <InputBooks />
    </div>
  );
}

export default App;
