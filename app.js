const fs = require('fs');
const http = require('http');
const url = require('url');
const express = require('express');

const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});
app.get('/index', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});
app.get('/process-page', (req, res) => {
     res.sendFile(__dirname + '/process-page.html');
});
app.get('/sign-in', (req, res) => {
     res.sendFile(__dirname + '/sign-in.html');
});


app.listen(3000, () => {
     console.log("Server start!");
});