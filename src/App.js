import React, { useState } from 'react';

const BestSellerPage = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [sortBy, setSortBy] = useState(null);

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    let sortedBooks = [...filteredBooks];
    if (sortValue === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === 'price') {
      sortedBooks.sort((a, b) => a.price - b.price);
    }
    setFilteredBooks(sortedBooks);
  };

  const handleCategoryFilter = (category) => {
    const filtered = books.filter((book) => book.category === category);
    setFilteredBooks(filtered);
    setSortBy(null);
  };

  const handleClick = (author) => {
    console.log(`Clicked on book by ${author}`);
  };

  return (
    <div>
      <h1>Amazon Best-Seller Books</h1>
      <div>
        <label>Sort by: </label>
        <select onChange={handleSortChange} value={sortBy}>
          <option value="">-- Select --</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div>
        <label>Filter by Category: </label>
        <button onClick={() => handleCategoryFilter('fiction')}>Fiction</button>
        <button onClick={() => handleCategoryFilter('non-fiction')}>Non-Fiction</button>
        <button onClick={() => handleCategoryFilter('biography')}>Biography</button>
      </div>
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            <div>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Price: Rs.{book.price}</p>
              <p>Rating: {book.rating}</p>
              <button onClick={() => handleClick(book.author)}>Click for Author</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const booksData = [
  { title: 'Book 1', author: 'Author 1', category: 'fiction', price: 100, rating: 4.5 },
  { title: 'Book 2', author: 'Author 2', category: 'non-fiction', price: 150, rating: 4.2 },
  { title: 'Book 3', author: 'Author 3', category: 'biography', price: 299, rating: 4.8 },
  { title: 'Book 4', author: 'Author 4', category: 'fiction', price: 189, rating: 3.9 },
  { title: 'Book 5', author: 'Author 5', category: 'non-fiction', price: 199, rating: 4.6 },
];

const App = () => {
  return <BestSellerPage books={booksData} />;
};

export default App;
