import React from 'react';

const Book = (props) => {

  const style = {border: '2px solid', width: '250px', textAlign: 'center'}
  const ulStyle = {listStyleType:'none'}

  return (
    <div>
      <div style={style}>
      <a href={props.book.link} target="_blank"> {props.book.title} </a>
      <div></div>
      <img src={props.book.image} alt="thumbnail" />
      <ul style={ulStyle}>
        <li>Authors: {props.book.authors}</li>
        <li>Categories: {props.book.categories}</li>
        <li>Rating: {props.book.rating}</li>
      </ul>
    </div>
    </div>
  )
}

export default Book;