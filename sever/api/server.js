const express = require('express');
const bodyParser = require('body-parser');
const cors  =require ('cors');
const db =require('../db/db')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/articles', (req, res) => {
    res.json(Articles);

})
app.get('/api/users', (req, res) => {
    res.json(Users);
})
app.get ('/api/teste',(req,res)=>{
  db.getArticles()
  .then((Articles)=>{
      res.json(Articles);
  })
  .catch((err)=>{
    console.log(err);
    res.json(err).status(500);
  })
})



app.listen(8081, () => {
  console.log('API server listening on port 8081');
});

