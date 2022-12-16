const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookshelf');

const bookSchema = mongoose.Schema({
  _id: String,
  title: String,
  author: String,
  categories: String,
  publisher: String,
  publishedDate: Date,
  description: String,
  rating: Number,
  link: String
});

const Book = mongoose.model('Book', bookSchema);

const storeBook = (book) => {
  let newBook = new Book(book);
  return newBook.save();
};

module.exports = {storeBook, Book};



