const express = require("express");
const app = express();
const path = require("path");


app.use(express.static('balghar')); // For serving static files
// app.use(express.static('static/img'));
// app.use(express.urlencoded());

// app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.status(200).sendFile('index.html', {root: path.join(__dirname,'/balghar')});
})

// START THE SERVER
app.listen(8000, () => {
    console.log(`The application started successfully on port 8000`);
});