import React from 'react';
import SearchResult from './SearchResult.jsx';

const SearchResultList = (props) => {
  const style = {display: 'flex', flexWrap: 'wrap', flexDirection: 'row'};
  return (
    <div>
      Search result:
      <div style={style}>
        {
          props.result.map((book) => {
            return <SearchResult key={book._id} book={book} onSave={props.onSave} setBooks={props.setBooks}/>
          }
        )}
      </div>
    </div>
  )
};

export default SearchResultList;