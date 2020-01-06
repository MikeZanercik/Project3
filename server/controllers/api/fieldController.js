const fieldController = require('express').Router();
const db = require('../../models');

fieldController.post("/", function (req, res) {
    console.log(req.body);

    db.Field.create(req.body)
        .then(dbData => {
            console.log(dbData);
            res.json(dbData)
        })
        .catch(err => res.send(err))
})

module.exports = fieldController;