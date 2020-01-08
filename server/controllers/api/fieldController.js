const fieldController = require('express').Router();
const db = require('../../models');

fieldController.post("/", function (req, res) {
    db.Field.create(req.body)
        .then(dbData => {
            console.log(dbData);
            res.json(dbData)
        }) 
        .catch(err => res.send(err))
})

fieldController.get("/", function(req, res){
    db.Field.findAll()
        .then(function(data){
            res.json(data)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = fieldController;