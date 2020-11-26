const sql = require("./db.js");
// constructor
const Voting = function(voting) {
    this.name = voting.name;
    this.description = voting.description;
    this.division_id_division = voting.division_id_division;
};


// Get All Users
/*
Employee.getAll = result => {
  let array=[];
  let employee= [];
  console.log('modelo');
    sql.query("SELECT * FROM employee", (err, res) => {
        employee = res;
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        } 
            result(null, employee);
    });
};*/

Voting.findByDivision = (idDivision, result) => {
    console.log('model');
    return new Promise((resolve,reject) => {
        sql.query(`SELECT * FROM voting WHERE division_id_division = ${idDivision}`, (err, res) => {
            if (err) reject(err)
                resolve(res);
            
        });
    });
};


Voting.findVoteByVotingId = (id_voting, result) => {
    console.log('model');
    return new Promise((resolve,reject) => {
        sql.query(`SELECT * FROM vote WHERE voting_id_voting = ${id_voting}`, (err, res) => {
            if (err) reject(err)
                resolve(res);
        });
    });
};




module.exports = Voting;
