const sql = require("./db.js");
// constructor
const Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.street = employee.street;
    this.colony = employee.colony;
    this.cell_phone = employee.cell_phone;
    this.job = employee.job;
    this.img = employee.img;
};


// Get All Users
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
};

Employee.findStars = (idEmployee, result) => {
    sql.query(`SELECT * FROM stars WHERE employee_id_employee = ${idEmployee}`, (err, res) => {
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

Employee.findServices = (result) => {
    sql.query(`SELECT id_need, category, area, activity, need.specific, type_id_type, name FROM need, type WHERE id_type = type_id_type`, (err, res) => {
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

Employee.findNeed = (id_type, result) => {
    sql.query(`SELECT DISTINCT category FROM need, type WHERE id_type = type_id_type AND type_id_type = ${id_type}`, (err, res) => {
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

Employee.findByCategory = (category, result) => {
    console.log(category);
    sql.query(`SELECT DISTINCT area FROM need  WHERE category = '${category}' `, (err, res) => {
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

Employee.findByArea = (area, result) => {
    sql.query(`SELECT DISTINCT activity FROM need WHERE area = '${area}' `, (err, res) => {
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

Employee.findByActivity = (activity, result) => {
    sql.query(`SELECT DISTINCT need.specific FROM need WHERE activity = '${activity}' `, (err, res) => {
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












module.exports = Employee;
