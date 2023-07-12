const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/path');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running');
});


sequelize.sync()
  .then(() => {
    console.log('Database and tables created');
  })
  .catch((error) => {
    console.error('Error creating database and tables:', error);
  });


  
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  