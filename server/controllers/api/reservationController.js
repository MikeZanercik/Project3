 const reservationController = require('express').Router();
const db = require('../../models');

reservationController.post("/", function (req, res) {
    console.log(typeof req.body);

    db.Reservation.create(req.body)
        .then(dbData => {
            console.log(dbData);
            res.json(dbData)
        })
        .catch(err => res.send(err))

})

reservationController.post("/mine", function(req, res){
    db.Reservation.findAll({
        include: [db.User, db.Field],
        where: { 
            UserId: req.body.loggedUser 
        }
    })
        .then(dbData => res.json(dbData))
        .catch(err => res.json(err))
});


module.exports = reservationController;