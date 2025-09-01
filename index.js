const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  res.send(`Welcome to the version control system! Today's date is ${currentDate}.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});