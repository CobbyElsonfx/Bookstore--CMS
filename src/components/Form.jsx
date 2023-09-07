// Form.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice'; // Import the 'addBook' action

function Form() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); // State for the book title
  const [author, setAuthor] = useState(''); // State for the author
  const [category, setCategory] = useState('action'); // State for the book category
  const id = books.length + 1;
  const handleAddBook = () => {
    const book = {
      id,
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('action');
  };

  return (
    <div className="pageWrapper bookForm">
      <div className="bookTitle">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="bookAuthor">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)} // Handle author input change
        />
      </div>
      <div className="bookCategory">
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="action">Action</option>
          <option value="economy">Economy</option>
          <option value="scienceFiction">Science Fiction</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </div>
  );
}

export default Form;
