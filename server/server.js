const path = require('path');

const publicPath = path.join(__dirname, '../public');
// console.log(publicPath);

const express = require('express');
const app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
