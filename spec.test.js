const axios = require('axios');
const api = require('./helpers/api.js');
const Book = require('./database/index.js').Book;
const mongoose = require('mongoose');
// const Books = require('./server/searchResult.js').Books;

describe("helpers", function() {

  test("testing GET request to google books API", function(done) {
    api.getBooks('The Witcher')
      .then((result) => {
        expect(result[0].volumeInfo.title).toEqual('The Witcher Boxed Set: Blood of Elves, The Time of Contempt, Baptism of Fire');
        done();
      });
  });

  // test("testing temp data funcitonality", function(done) {

  //   api.getBooks('The Witcher')
  //     .then((result) => {
  //       result.forEach((book) => {
  //         Books.add(book);
  //       });
  //     })
  //     .then(() => {
  //       let books = Books.items();
  //       expect(books.length).toEqual(10);
  //       expect(books[1].title).toEqual('The Witcher Omnibus');
  //       done();
  //     });
  // })
});

describe("server side", function() {
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/bookshelf');
    done();
  });

  afterAll(() => {
    Book.collection.drop()
      .then(() => {
        mongoose.disconnect('mongodb://localhost/bookshelf');
      });
  });

  test('testing POST request to index', function(done) {
    axios.post('http://localhost:3000/books', {title: 'The Witcher'})
      .then((res) => {
        expect(res.data[2].title).toEqual('The World of the Witcher');
        done();
      })
      .catch((err) => {
        console.error(err);
      });
  });

  test('testing POST request to /save', function(done) {
    axios.post('http://localhost:3000/books', {title: 'Game of Thrones'})
      .then((res) => {
        console.log(res.data);
        let book = res.data[0];
        return axios.post('http://localhost:3000/save', {book});
      })
      .then(() => {
        return Book.find();
      })
      .then((res) => {
        expect(res[0].authors).toEqual('George R. R. Martin');
        done();
      })
      .catch((err) => {
        console.error(err);
      })
  });

});
