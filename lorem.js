const express = require('express');
const loremIpsum = require('lorem-ipsum');

let application = express();




application.get('/lorem/:counts', function (req, res){
   res.send(loremIpsum({
    count: req.params.counts,
    units: 'paragraph',
    format: 'html'
    }))
});





application.listen(3000, function(){

});