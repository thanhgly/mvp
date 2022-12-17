import React from 'react';

const SearchResult = (props) => {

  const ulStyle = {listStyleType:'none'}
  const style = {border: '2px solid', width: '250px', textAlign: 'center'}

  const save = (e) => {
    console.log(props.book);
    props.onSave(props.book)
      .then(() => {
        return props.fetchBooks()
      })
      .then((data) => {
        props.setBooks(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div style={style}>
      <a href={props.book.link} target="_blank"> {props.book.title} </a>
      <div></div>
      <img src={props.book.image} alt="thumbnail" />
      <ul style={ulStyle}>
        <li>Authors: {props.book.authors}</li>
        <li>Categories: {props.book.categories}</li>
        <li>Rating: {props.book.rating}</li>
      </ul>
      <button onClick={save}> save </button>
    </div>
  )
}

export default SearchResult;