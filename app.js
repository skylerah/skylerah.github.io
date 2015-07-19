var express = require('express');
var app = express();

app.use(express.static('public'));

console.log('Listening on port 1337.');
app.listen(1337);

app.get('/', function(req, res) {
  res.send('Sup.');
});
