/*
Assingment 4 - Create a react to-do app

"I, Meetkumar, student number: 000385026, certify that this material is my original work. No other person's work has been used without due acknowledgement and I have not made my work available to anyone else."

I learned to create some components from link below :
https://www.youtube.com/watch?v=IR6smI_YJDE

*/
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening');
});
