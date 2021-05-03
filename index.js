
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/test.html'));
});
var port_number = server.listen(process.env.PORT || 3000);
app.listen(3000, () => {
  console.log('server started');
});
