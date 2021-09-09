let express = require('express');

let app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(3000);
console.log('Start server!');