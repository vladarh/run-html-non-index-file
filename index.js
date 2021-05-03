const express = require('express');
const path = require('path');

const app = express();
modules.app = 
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/test.html'));
});

var port_number = index.listen(process.env.PORT || 3000);
app.listen(port_number);
