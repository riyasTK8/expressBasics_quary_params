import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

//req.quary.....
//http://localhost:5000/users?limit=5&page=7&name=riyas

app.get('/', (req, res) => {
  res.send('Server started');
});

app.get('/users', (req, res) => {
  const { limit, page, name } = req.query;
  res.send({ limit, page, name });  
  console.log(req.query);           
});


















app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
