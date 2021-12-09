const router = require('express').Router()
const pool = require('../db/connection.js')

router.post('/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty
  
    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`
  
    pool.query(query, function (err) {
        if (err) {
        console.log(err)
         }
  
        res.redirect('/')
    })
})
router.get('/', function (req, res) {
    const query = `SELECT * FROM books`
  
    pool.query(query, function (err, data) {
         if (err) {
        console.log(err)
        }
  
    const books = data
  
    console.log(data)
  
    res.render('books', { books })
    })
})
  
router.get('/:id', function (req, res) {
    const id = req.params.id
  
    const query = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
  
    pool.query(query, data, function (err, data) {
        if (err) {
        console.log(err)
        }
  
      const book = data[0]
  
      console.log(data[0])
  
      res.render('book', { book })
    })
})
  
router.get('/edit/:id', function (req, res) {
    const id = req.params.id
  
    const query = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
  
    pool.query(query, data, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const book = data[0]
  
      console.log(data[0])
  
      res.render('editbook', { book })
    })
})
  
router.post('/updatebook', function (req, res) {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty
  
    const query = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]
  
    pool.query(query, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books/edit/${id}`)
    })
})
  
router.post('/remove/:id', function (req, res) {
    const id = req.params.id
  
    const query = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]
  
    pool.query(query, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/`)
    })
})

module.exports = router