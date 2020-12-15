const Employee = require("../models/Employee.model.js");


// Retrieve all Customers from the database.
exports.findAll = async(req, res) => {
  console.log('controldor');
  Employee.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
}

exports.findStars = async(req, res) => {
    console.log('controldor');
    Employee.findStars(req.params.idEmployee, (err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }


  exports.findServices = async(req, res) => {
    console.log('controldor');
    Employee.findServices((err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

  exports.findNeed = async(req, res) => {
    console.log('controldor');
    Employee.findNeed(req.params.needId, (err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

  exports.findByCategory = async(req, res) => {
    console.log(req.body.category);
    Employee.findByCategory(req.body.category, (err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

  exports.findByArea = async(req, res) => {
    console.log('controldor');
    Employee.findByArea(req.body.area, (err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

  exports.findByActivity = async(req, res) => {
    console.log('controldor');
    Employee.findByActivity(req.body.activity, (err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

  

  
  

  




