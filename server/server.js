let express = require('express');

let app = express();

app.use(express.static('server/public/week-challenge'));

app.listen(5000, function () {
    console.log('running on port 5000');
    
})