import React from 'react';
import Book from './Book.jsx';

const BookList = (props) => {

  return (
    <div>
      <h3>My books</h3>
      <div>Place holder for Sort</div>
      {props.books.map((book, i) => <Book key={i} book={book}/>)}
    </div>
  )
};

export default BookList;