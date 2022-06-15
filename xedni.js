//basic http server

const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public)'));

//rota principal
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,('./public/home.html')))
})

const port = 3000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
});







