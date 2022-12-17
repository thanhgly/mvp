// let Books = {
//   _data: {},

//   items: () => {
//     return Object.values(Books._data);
//   },

//   add: (book) => {
//     return new Promise((res, rej) => {
//       Books._data[book.id] = Books.conform(book);
//       res(Books.items());
//     });
//   },

//   update: (books) => {
//     let addBooks = books.map((book) => {
//       return Books.add(book);
//     });
//     return Promise.all(addBooks);
//   },

//   conform: (book) => {
//     let bk = {};
//     bk._id = book.id;
//     bk.title = book.volumeInfo.title;
//     bk.authors = book.volumeInfo.authors.join(', ') || '';
//     bk.categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : '';
//     bk.publisher = book.volumeInfo.publisher;
//     bk.publishedDate = book.volumeInfo.publishedDate;
//     bk.description = book.volumeInfo.description;
//     bk.rating = book.volumeInfo.averageRating || 0;
//     bk.link = book.volumeInfo.previewLink;
//     return bk;
//   }
// };

let conform = (book) => {
  let bk = {};
  bk._id = book.id;
  bk.title = book.volumeInfo.title;
  bk.authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null;
  bk.categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : null;
  bk.publisher = book.volumeInfo.publisher;
  bk.publishedDate = book.volumeInfo.publishedDate;
  bk.description = book.volumeInfo.description;
  bk.rating = book.volumeInfo.averageRating || 0;
  bk.link = book.volumeInfo.previewLink;
  bk.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No thumbnail';
  return bk;
}

module.exports = {conform};
