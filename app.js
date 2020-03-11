const db = require('./queries')
const express = require('express')
const handlebars = require( 'express-handlebars')
const bodyParser = require('body-parser');


const app = express()
const port = 3000;

// view engine setup
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
//from tutorial
  res.render('home');
});

app.get('/map', (req, res) => {
//from tutorial
  res.render('map');
});

app.get('/signup', (req, res) => {
//from tutorial
  res.render('signup');
});

app.get('/service/request', (req, res) => {
//from tutorial
  res.render('request-service');
});

app.get('/service/view/:id', (req, res) => {
//from tutorial
  res.render('view-service');
});

app.get('/service/cancel/:id', (req, res) => {
//from tutorial
  res.render('cancel-service');
});

app.get('/service/progress/:id', (req, res) => {
//from tutorial
  res.render('progress-service');
});

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
