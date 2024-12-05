const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const merchant_model = require('./MerchantModel');

// Use the cors middleware with your frontend origin
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// get data
app.get('/', (req, res) => {
  merchant_model.getData()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
