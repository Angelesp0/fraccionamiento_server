const Events = require("../models/events.model.js");


// Retrieve all Customers from the database.
exports.findAll = async(req, res) => {
  console.log('controldor');
    Events.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
}

exports.postEvents = async(req, res, next) => {
    console.log("controlador Eventos");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    // Create a Customer
    const events = new Events({
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        division_id_division: req.params.divisionId
    });
    // Save Customer in the database
    Events.postEvents(events, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};



// Find one user by id
exports.getEventsByDivision = (req, res) => {
    Events.getEventsByDivision(req.params.divisionId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.divisionId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.divisionId
                });
            }
        } else res.send(data);
    });
};
