const sql = require("./db.js");
// constructor
const Vote = function(vote) {
    this.voting_id_voting = vote.voting_id_voting;
    this.users_id_users = vote.users_id_users;
    this.choice = vote.choice;
};
Vote.postVote = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO vote SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Voto realizado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};




module.exports = Vote;
