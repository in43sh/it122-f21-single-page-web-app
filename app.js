// Import
const express = require('express');
const app = express();
// const port = 3000;
// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'))

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

// Set Routes
app.get('', (req, res) => {
  res.render('index', {text: 'This is EJS'})
});

app.get('/about', (req, res) => {
  res.render('about', {text: 'About Us'})
});

app.get('/post', (req, res) => {
  res.render('post', {text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit"'})
});

app.get('/contact', (req, res) => {
  res.render('contact', {text: 'Contact Us'})
});

// let listener = app.listen();
// console.log(`Listening to port number ${listener.address().port}`);
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );