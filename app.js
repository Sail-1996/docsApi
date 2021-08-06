const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
///db connection
require("./db/conn");
///db connection
const port = process.env.PORT || 4000; ///Port

/////Model
const User = require("./models/user.model");
const Doc = require("./models/docs.model");

////Model
///////////////
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//////////////api add user
app.post("/addUser", (req, res) => {
  console.log("adding User");
  const userObj = {
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    gender:req.body.gender,
    d_o_b:req.body.d_o_b,
    employeeId:req.body.employeeId,
    maritalStatus:req.body.maritalStatus,
    id_proof:req.body.id_proof

  };
  const newUser = new User(userObj);
  newUser.save((err, user) => {
    if (err) {
      res.status(400).send("There is an error while adding user");
    } else {
      res.status(200).json(user);
    }
  });
});

////api docs
app.post("/addDoc", (req, res) => {
  console.log("adding new Docs");
  const docObj = {
    "_id": new mongoose.Types.ObjectId(),
    "phone":req.body.phone,
    "landlineNo":req.body.landlineNo,
    "email":req.body.email,
    "addressPer":req.body.addressPer,
    "addressLoc":req.body.addressLoc,
    "user": "610d3baa179ebc4190df4362",
  };
  const newDoc = new Doc(docObj);
  newDoc.save((err, doc) => {
    if (err) {
      res.status(400).send("There is an error while adding user");
    } else {
      res.status(200).json(doc);
    }
  });
});

////api get docs include user
app.get("/docs", (req, res) => {
  console.log("getting all Docs");
  Doc.find({})
    .populate("user")
    .exec((err, docs) => {
      if (err) {
        res.status(400).send("There is an error while adding user");
      } else {
        res.status(200).json(docs);
      }
    });
});
//////////Put methos or editing
app.put("/docs/:id", (req, res) => {
    console.log("editing a Docs");
    const docObj = {
      
        title: req.body.title,
        description: req.body.description,
      
      };
    Doc.findByIdAndUpdate(req.params.id,docObj,{new:true}) .exec((err, docs) => {
        if (err) {
          res.status(400).send("There is an error while editin user");
        } else {
          res.status(200).json(docs);
        }
      });
  });
/////////////delete
app.delete("/docs/:id", (req, res) => {
    console.log("deleting a Docs");
  
    Doc.findByIdAndDelete(req.params.id) .exec((err, doc) => {
        if (err) {
          res.status(400).send("There is an error while editin user");
        } else {
          res.status(200).json(doc);
        }
      });
  });


app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
