const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const path = require('path');

const port = 3030;
const app = express();

// Middleware cho body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Kết nối API
app.use('/api', api);

// Phục vụ file tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Lắng nghe tại cổng 3030
app.listen(port, function () {
    console.log("Server is listening at port: " + port);
});
