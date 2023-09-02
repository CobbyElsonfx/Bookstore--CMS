import React from 'react';
import progres from '../assets/progress.png';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'History',
    },
  ];
  return (
    <div>
      {
        books.map((book) => (
          <div key={book.id} className=" bookDetails">
            <div className="firstCol">
              <div>
                <small>{book.author}</small>
                <h2>{book.title}</h2>
                <p>{book.category}</p>
              </div>
              <div>
                <button type="button" className="book-btn">Comments</button>
                <button type="button" className="book-btn">Remove</button>
                <button type="button" className="book-btn">Edit</button>
              </div>
            </div>
            <div className="progressBarAndUpdateButton">
              <div className="secondCol">
                <img src={progres} alt="progresImg" className="progressImg" />
                <div className="aboutProgress">
                  <div className="oval">
                    <p className="progress">64%</p>
                    <p className="completed">Completed</p>
                  </div>
                </div>
              </div>
              <div>
                <h2>CURRENT CHAPTER</h2>
                <h2>
                  CHAPTER
                  <span>45</span>
                </h2>
                <button type="button" className="update-btn">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        ))
        }
    </div>
  );
}

export default BookList;
