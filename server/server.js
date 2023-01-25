const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient



MongoClient.connect("mongodb+srv://abi:Iamcool12@cluster0.gh0usib.mongodb.net/?retryWrites=true&w=majority")
  .then((client) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("view engine", "ejs");
    app.use(express.static("public"));

    console.log('connected to db')
    const db = client.db('pollsDB')
    const polls = db.collection('polls')


    app.listen(3000, () => console.log("listening on port 3000"));

    app.get('/', (req, res) => {
      polls.find().toArray()
        .then(results =>{
          //console.log(results)
          res.render('index.ejs', {pollsArray: results})
        })
        .catch(err => console.error(err))
    })

    app.post('/addpoll', (req, res) =>{
      req.body.count1 = 0;
      req.body.count2 = 0;
      console.log(req.body);
      let numPolls
      polls.count().then((count) => numPolls = count)
      req.body.id=numPolls+1
      polls.insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => console.error(err));
    })
  })
  .catch((err) => console.error(err));

