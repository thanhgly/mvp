import React from 'react';
import SearchResultList from './SearchResultList.jsx';
import {useState} from 'react';

const Search = (props) => {

  const [terms, setTerms] = useState('');
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    setTerms(e.target.value);
  };

  const search = () => {
    props.onSearch(terms)
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h3>Search bar</h3>
      Enter title: <input value={terms} onChange={onChange}/>
      <button onClick={search}> Find </button>
      <div id='result-list'>
        Number of book found: {result.length}
        <SearchResultList result={result} onSave={props.onSave} setBooks={props.setBooks} fetchBooks={props.fetchBooks}/>
      </div>
    </div>
  )
};

export default Search;