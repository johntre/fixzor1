const express = require('express')
const handlebars = require( 'express-handlebars');

const app = express()
const port = 3000;

// view engine setup
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'))

app.get('/', (req, res) => {
//from tutorial
  res.render('main', {layout : 'index'});
});

app.get('/home', (req, res) => {
//from tutorial
  res.render('home');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
