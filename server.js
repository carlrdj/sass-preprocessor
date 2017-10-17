var express = require('express');
var app = express();

app.use(express.static('./dist'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {title: 'Login'});
});
app.get('/order', function (req, res) {
  res.render('index', {title: 'Login'});
});

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log('Puerto 3000 escuchando');
})