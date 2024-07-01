const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.post('/menu', async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

const personRoutes = require('./routes/personRoutes');

app.use('./person',personRoutes);


app.listen(3000, ()=>{
  console.log('Listening on port 3000');
})