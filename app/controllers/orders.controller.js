const Orders = require("../models/orders.model.js");

/*exports.findByDivision = async(req, res) => {
    console.log('controldor');
    const votacion = await Orders.findByDivision(req.params.divisionId);
    console.log(votacion);
    if (votacion === undefined){
        console.log(votacion);
        res.json({
            error: 'No se encontraron pagos'
        });
    }
    else {
        /////////////////////////////////////
        //const votos = await Voting.findVotoByDivision(req.params.divisionId);
        res.send(votacion);
       // const votos = await Voting.findByDivision(votacion);

    }


      
}*/

/*exports.findVoteByVotingId = async(req, res) => {
    const user = await Voting.findVoteByVotingId(req.params.votingId);
    if (user === undefined) {
        console.log(user);
        res.json({
            error: 'No hay votos registrados'
        });
    } else {
        res.json(
            user
        )
    }
};*/


// Retrieve all Customers from the database.
exports.getOrders = async(req, res) => {
    console.log('controldor');
    Orders.getOrders((err, data) => {
          if (err)
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving customers."
              });
          else res.send(data);
      });
  }

exports.postOrder = async(req, res, next) => {
    console.log("controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    // Create a Customer
    const order = new Orders({ 
        users_id_users: req.params.userId,
        address:  req.body.address,
        phone:  req.body.phone,
        contact:  req.body.contact,
        hour:  req.body.hour,
        date:  req.body.date,
        services:  req.body.services,
        description:  req.body.description,
        cargo:  req.body.cargo,
        $_material:  req.body.$_material,
        $_service:  req.body.$_service,
        $_total:  req.body.$_total,
        payment_method:  req.body.payment_method,
        finish_date:  req.body.finish_date,
        Finish_hour:  req.body.Finish_hour,
    });
    // Save Customer in the database
    Orders.postOrder(order, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};


exports.putOrders = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio!"
        });
    }
    Orders.putOrders(
        req.params.orderId,
        req.body.id_employee,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );

};







  



