import React from 'react';

const SearchResult = (props) => {

  const style = {border: '2px solid', width: '250px', textAlign: 'center'}

  const save = (e) => {
    console.log(props.book);
    props.onSave(props.book)
      .then(() => {
        // Re-render my books here
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
      <div></div>
      <button onClick={save}> save </button>
    </div>
  )
}

export default SearchResult;