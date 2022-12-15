const api = require('./helpers/api.js');
const Books = require('./helpers/searchResult.js').Books;

describe("helpers", function() {

  test("testing GET request to google books API", function(done) {
    api.getBooks('The Witcher')
      .then((result) => {
        expect(result[0].volumeInfo.title).toEqual('The Witcher Boxed Set: Blood of Elves, The Time of Contempt, Baptism of Fire');
        done();
      });
  });

  test("testing temp data funcitonality", function(done) {

    api.getBooks('The Witcher')
      .then((result) => {
        result.forEach((book) => {
          Books.add(book);
        });
      })
      .then(() => {
        let books = Books.items();
        expect(books.length).toEqual(10);
        expect(books[1].title).toEqual('The Witcher Omnibus');
        done();
      });
  })
});
