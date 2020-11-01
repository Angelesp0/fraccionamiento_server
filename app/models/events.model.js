const sql = require("./db.js");
// constructor
const Events = function(events) {
    this.id_events = events.id_rules;
    this.title = events.title;
    this.description = events.description;
    this.start = events.start;
    this.end = events.end;
    this.division_id_division = events.division_id_division;
};


// Get All Users
Events.getAll = result => {
  console.log('modelo');
    sql.query("SELECT * FROM events", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Events.getEventsByDivision = (divisionId, result) => {
    console.log(divisionId);
    sql.query(`SELECT * FROM events WHERE division_id_division = ${divisionId}`, (err, res) => {
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

// Create one user
Events.postEvents = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO events SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }

        console.log("Aviso creado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};




module.exports = Events;
