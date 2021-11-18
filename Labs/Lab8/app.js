const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const personRoutes = require('./routes/person');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

app.use(express.static('form'));

app.get('/form', (req, res) => {
    res.send('./app.js/index', { root: __dirname });
});

app.post('/form', urlencodedParser, function(req, res){
    console.log(req.body);
});

app.get('/', function(req, res) {
    res.render("index");
})

app.use(indexRoutes);
app.use("/person", personRoutes);

app.listen(port, () => console.log(`listening on port ${port}!`));