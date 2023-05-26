import BookList from './BookList';
import InputBooks from './InputBook';
import Navbar from './Navbar';

function Books() {
  return (
    <div className="bg-grey-light pb-3">
      <Navbar />
      <BookList />
      <InputBooks />
    </div>
  );
}

export default Books;
