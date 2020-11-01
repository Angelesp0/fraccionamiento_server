const Rules = require("../models/rules.model.js");


// Retrieve all Customers from the database.
exports.findAll = async(req, res) => {
  console.log('controldor');
    Rules.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
}

exports.postRules = async(req, res, next) => {
    console.log("controlador advertisements");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    // Create a Customer
    const rules = new Rules({
        title: req.body.title,
        body: req.body.body,
        url: req.body.url,
        name: req.body.name,
        division_id_division: req.params.divisionId
    });
    // Save Customer in the database
    Rules.postRules(rules, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};



// Find one user by id
exports.getRulesByDivision = (req, res) => {
    Rules.getRulesByDivision(req.params.divisionId, (err, data) => {
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
