const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => { console.log(`App listening on port ${port}`) });


app.get('/suer', (req, res) => {
    res.send("HI");
  });
  
