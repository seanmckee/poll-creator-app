const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient
require("dotenv").config();

let dbConnectionStr = process.env.DB_STRING


MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("view engine", "ejs");
    app.use(express.static("public"));

    console.log("connected to db");
    const db = client.db("pollsDB");
    const polls = db.collection("polls");

    app.listen(3000, () => console.log("listening on port 3000"));

    app.get("/", (req, res) => {
      polls
        .find()
        .toArray()
        .then((results) => {
          //console.log(results)
          res.render("index.ejs", { pollsArray: results });
        })
        .catch((err) => console.error(err));
    });

    app.post("/addpoll", (req, res) => {
      req.body.count1 = 0;
      req.body.count2 = 0;
      polls.count().then((count) => {
        req.body.id = count;
      });
      polls
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => console.error(err));
    });

    app.put("/update1", (req, res) => {
      polls
        .updateOne(
          req.body,
          {
            $inc: { count1: 1 },
          },
          {
            upsert: false,
          }
        )
        .then((result) => {
          console.log("added 1 vote for option 1");
          res.json("Vote Counted");
        })
        .catch((err) => console.error(err));
    });

    app.put("/update2", (req, res) => {
      polls
        .updateOne(
          req.body,
          {
            $inc: { count2: 1 },
          },
          {
            upsert: false,
          }
        )
        .then((result) => {
          console.log("added 1 vote for option 2");
          res.json("Vote Counted");
        })
        .catch((err) => console.error(err));
    });

    app.delete("/delete", (req, res) => {
      polls
        .deleteMany({})
        .then((result) => {
          console.log("deleted");
          res.json("deleted");
        })
        .catch((err) => console.error(err));
    });
  })

  .catch((err) => console.error(err));

