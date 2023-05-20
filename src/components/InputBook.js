function InputBooks() {
  return (
    <div>
      <div>Add a Book</div>
      <form>
        <input type="text" />
        <select name="choice">
          <option value="category">Category</option>
          <option value="book">Book</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default InputBooks;
