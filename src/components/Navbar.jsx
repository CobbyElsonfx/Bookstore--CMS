import React from 'react';

function Navbar() {
  return (
    <div className="panel-bg">
      <nav className="navbar">
        <ul>
          <li>
            <a href="./" className="bookstore-CMS">Bookstore CMS</a>
          </li>
          <li>
            <a href="./" className="books-nav">Books</a>
          </li>
          <li>
            <a href="./categories" className="categories">Categories</a>
          </li>
        </ul>
        <div>
          <img src="../public/assets/user.png" alt="avatar" className="avatar" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
