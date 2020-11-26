const Voting = require("../models/voting.model.js");
const Vote = require("../models/vote.model.js");

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

exports.postVote = async(req, res, next) => {
    console.log("controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    // Create a Customer
    const vote = new Vote({
        
        voting_id_voting: req.params.votingId,
        users_id_users: req.body.users_id_users,
        choice:  req.body.choice
    });
    // Save Customer in the database
    Vote.postVote(vote, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};

exports.postVoting = async(req, res, next) => {
    console.log("controlador");
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    // Create a Customer
    const voting = new Voting({
        division_id_division: req.params.divisionId,
        name:  req.body.name,
        description: req.body.description,
        budget: req.body.budget
    });
    // Save Customer in the database
    Voting.postVoting(voting, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Algo a currido al crear el usuario"
            });
        else res.send(data);
    });
};




  



