var express = require('express');
var app = express();

var messages = [
    {
        text: 'Some text',
        owner: 'Marco'
    },
    {
        text: 'Other text',
        owner: 'Sofia'
    }
];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234)