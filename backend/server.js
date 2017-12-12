var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [
    {
        text: 'Blá Blá',
        owner: 'Marco'
    },
    {
        text: 'cocozinho',
        owner: 'Sofia'
    }
];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content_Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})

app.use('/api', api);

app.listen(63145)