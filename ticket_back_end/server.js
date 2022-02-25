const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'Your express backend is on !!!' });
});