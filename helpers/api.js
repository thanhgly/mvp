const axios = require('axios');
// const API_KEY = require('../config.js').API_KEY;
// const GG_API_KEY = require('../config.js').GG_API_KEY;

const getBooks = (title) => {
  let terms = title.split(' ').join('+');
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${terms}&maxResults=15&langRestrict=en&printType=books`)
    .then((response) => {
      return response.data.items;
    })
    .catch((err) => {
      console.log('Error in getBooks GET request', err);
    });
}

module.exports.getBooks = getBooks;