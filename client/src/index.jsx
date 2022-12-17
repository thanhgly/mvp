import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import BookList from './components/BookList.jsx';
import {useState} from 'react';

const App = (props) => {

  const [books, setBooks] = useState([]);

  const search = (term) => {
    let data = {title: term};
    return new Promise((res, rej) => {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/books',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: (data) => {
          res(data);
        },
        error: (err) => {
          console.error(err);
          rej(err);
        }
      });
    });
  };

  const save = (book) => {
    return new Promise((res, rej) => {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/save',
        data: JSON.stringify({book}),
        dataType: 'json',
        contentType: 'application/json',
        success: (response) => {
          console.log('Save successful!');
          res(response);
        },
        error: (x, t, err) => {
          rej(err);
        }
      });
    })
  }


  return (
    <div>
      <h1>The Bookshelf</h1>

      <Search onSearch={search.bind(this)} onSave={save} setBooks={setBooks}/>

      <BookList books={books}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));