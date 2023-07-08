const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running');
});

  
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  