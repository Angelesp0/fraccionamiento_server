const sql = require("./db.js");
// constructor
const Advertisements = function(advertisement) {
    this.id_advertisements = advertisement.id_advertisements;
    this.title = advertisement.title;
    this.description = advertisement.description;
    this.date = advertisement.date;
    this.url = advertisement.url;
    this.img = advertisement.img;
    this.division_id_division = advertisement.division_id_division;
};


// Get All Users
Advertisements.getAll = result => {
  console.log('modelo');
    sql.query("SELECT * FROM advertisements", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


module.exports = Advertisements;
