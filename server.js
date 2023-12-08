const express = require('express')
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

app.get('/', function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/js', express.static('./js'));
app.use('/data', express.static('./data'));
app.use('/css', express.static('./css'));
app.use('/img', express.static('./img'));

app.listen(8004, () => {
  console.log(`App listening on port 8004`)
});