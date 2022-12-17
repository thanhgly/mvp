import React from 'react';
import Book from './Book.jsx';
import {useState} from 'react';

const BookList = (props) => {

  const [limit, setLimit] = useState(15);
  const style = {display: 'flex', flexWrap: 'wrap', flexDirection: 'row'};

  const onChange = (e) => {
    let newLimit = e.target.value;
    setLimit(newLimit);
    clearTimeout(null);
    setTimeout(() => {
      props.fetch(newLimit)
        .then((data) => {
          props.setBooks(data);
        })
        .catch((err) => {
          console.error(err);
        })
    }, 3000);
  }

  return (
    <div>
      <h3>My books</h3>
      <div style={style}>
        {props.books.map((book) => <Book key={book._id} book={book}/>)}
      </div>
      <div>
        Showing  <input value={props.limit} onChange={onChange}/> books
      </div>

    </div>
  )
};

export default BookList;