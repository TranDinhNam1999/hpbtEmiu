const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded());
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function(req, res) {
    console.log("server action on port: " + port);
});