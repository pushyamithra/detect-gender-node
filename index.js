const detect = require('detect-gender');
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/gender', async (req, res) => {
const result  = await detect('vadim');
res.send(result);
});
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})