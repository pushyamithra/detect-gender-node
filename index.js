const detect = require('detect-gender');
const express = require('express')
const app = express()
var http = require('http');

app.set('port', process.env.PORT || 3000);
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/gender', async (req, res) => {
const result  = await detect('vadim');
res.send(result);
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
