const express = require('express');
const ms = require('mediaserver');
const cors = require('cors');

const app = express();

app.use(cors);

app.listen(8000, function(){
    console.log('server running on port 8000');
});

app.get('/music', function(req, res){
    console.log(req);
    ms.pipe(req, res, '/assets/dontyouwantme.mp3');
})