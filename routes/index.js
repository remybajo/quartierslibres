var express = require('express');
var router = express.Router();

var request = require('sync-request')

var comModel = require('../models/movies')






router.post('/wishlist-movie', async function(req, res, next) {

  var newCom = new comModel({
    name: req.body.nameFromFront,
 email : "",
  })

  var comSave = await newCom.save()

  var result = false
  if(comSave.name){
    result = true
  }

  res.json({result, comSave})
});

router.delete('/wishlist-movie/:name', async function(req, res, next) {

  var returnDb = await movieModel.deleteOne({ movieName: req.params.name})

  var result = false
  if(returnDb.deletedCount == 1){
    result = true
  }

  res.json({result})
});

router.get('/wishlist-movie', async function(req, res, next) {

  var movies = await movieModel.find()

  res.json({movies})
});

module.exports = router;

router.get("/validation", async function(req, res, next){
var resultat = []
 var id = req.query.id

var user = await comModel.findById(id)
resultat.push(user.name)
console.log(resultat)
res.json({resultat})
 })

 router.post('/email', async function(req, res, next){
  var id = req.query.id
  email = req.body.email
  console.log(email)
  var resultat = [await comModel.updateOne({ _id : req.query.id},
 { email: req.body.email })]
 
  console.log(req.body.email)
  console.log(req.query.id)
 res.json({resultat})
 })