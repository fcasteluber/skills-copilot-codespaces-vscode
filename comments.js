// Create web server
// 1. Load express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Load body-parser module
const bodyParser = require('body-parser');
// 4. Load comments data
const comments = require('./comments-data.json');
// 5. Set the view engine to ejs
app.set('view engine', 'ejs');
// 6. Set the views directory
app.set('views', './views');
// 7. Set the static directory
app.use(express.static('public'));
// 8. Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// 9. Create the home page
app.get('/', (req, res) => {
    res.render('home', { comments });
});
// 10. Create the form page
app.get('/form', (req, res) => {
    res.render('form');
});
// 11. Create the form post request
app.post('/form', (req, res) => {
    const { name, comment } = req.body;
    comments.push({ name, comment });
    res.redirect('/');
});
// 12. Create the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// 13. Create the delete comment
app.post('/delete', (req, res) => {
    const { comment } = req.body;
    const index = comments.findIndex(c => c.comment === comment);
    comments.splice(index, 1);
    res.redirect('/');
});
// 14. Create the edit comment
app.post('/edit', (req, res) => {
    const { comment, newComment } = req.body;
    const index = comments.findIndex(c => c.comment === comment);
    comments[index].comment = newComment;
    res.redirect('/');
});
// 15. Create the search comment
app.get('/search', (req, res) => {
    let { q } = req.query;
    q = q.toLowerCase();
    const results = comments.filter(c => c.comment.toLowerCase().includes(q));
    res.render('home', { comments: results });
});
// 16. Create the comment page
app.get('/comment/:comment', (req, res) => {
    const { comment } = req.params;
    const result = comments.find(c => c.comment === comment);
    res.render('comment
