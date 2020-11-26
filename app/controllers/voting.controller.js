const Voting = require("../models/voting.model.js");


// Retrieve all Customers from the database.
/*exports.findAll = async(req, res) => {
  console.log('controldor');
  Employee.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
}*/

exports.findByDivision = async(req, res) => {
    console.log('controldor');
    const votacion = await Voting.findByDivision(req.params.divisionId);
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


      
}

exports.findVoteByVotingId = async(req, res) => {
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

};
  



