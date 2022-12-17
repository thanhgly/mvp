const express = require('express');
const path = require('path');
const conform = require('../helpers/conform.js').conform;
const getBooks = require('../helpers/api.js').getBooks;
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/books', (req, res) => {
  var title = req.body.title;
  getBooks(title)
    .then((books) => {
      let newBooks = books.map((book) => {
        return conform(book);
      });
      return newBooks;
    })
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.post('/save', (req, res) => {
  let book = req.body.book;
  db.storeBook(book)
    .then((r) => {
      console.log('Book\'s stored!');
      res.status(201).json(r);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(501);
    });
});

app.get('/books', (req, res) => {
  let lim = req.query.limit;
  db.Book.find().sort({rating: -1}).limit(lim)
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(501);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});