const sql = require("./db.js");
// constructor
const Rules = function(rules) {
    this.id_rules = rules.id_rules;
    this.title = rules.title;
    this.body = rules.body;
    this.url = rules.url;
    this.name = rules.name;
    this.division_id_division = rules.division_id_division;
};


// Get All Users
Rules.getAll = result => {
  console.log('modelo');
    sql.query("SELECT * FROM rules", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};




// Create one user
Rules.postRules = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO rules SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }

        console.log("Aviso creado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

Rules.getRulesByDivision = (divisionId, result) => {
    sql.query(`SELECT * FROM fraccionamiento.rules WHERE division_id_division = ${divisionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
        result(null, res);
        }
    });
};


module.exports = Rules;
