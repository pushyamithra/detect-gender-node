const detect = require('detect-gender');
const express = require('express')
const app = express()
var http = require('http');

app.set('port', process.env.PORT || 3000);
console.log(process.env.PORT, "******");
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/gender', async (req, res) => {
const result  = await detect('vadim');
res.send(result);
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
