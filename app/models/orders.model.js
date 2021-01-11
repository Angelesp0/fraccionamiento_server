const sql = require("./db.js");
// constructor
const Orders = function(order) {
    this.id_orders = order.id_orders;
    this.users_id_users = order.users_id_users;
    this.address = order.address;
    this.phone = order.phone;
    this.contact = order.contact;
    this.hour = order.hour;
    this.date = order.date;
    this.services = order.services;
    this.description = order.description;
    this.cargo = order.cargo;
    this.$_material = order.$_material;
    this.$_service = order.$_service;
    this.$_total = order.$_total;
    this.payment_method = order.payment_method;
    this.finish_date = order.finish_date;
    this.Finish_hour = order.Finish_hour;
};



Orders.postOrder = (new_Order, result) => {
    console.log(new_Order);
    sql.query("INSERT INTO fraccionamiento.orders SET ?", new_Order, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Voto realizado: ", { id: res.insertId, ...new_Order });
        result(null, { id: res.insertId, ...new_Order });
    });
};


Orders.putOrders = (id, id_employee, result) =>{
    sql.query(
        "UPDATE fraccionamiento.orders SET employee_id_employee = ? , status= 'En proceso' WHERE id_orders = ?", [id_employee, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id_order: id});
        }
    );
}



// Get All Users
Orders.getOrders = result => {
    console.log('modelo');
    /*      sql.query("SELECT * FROM fraccionamiento.orders, fraccionamiento.users, fraccionamiento.employee where users_id_users = id_users AND id_employee = employee_id_employee", (err, res) => {*/
      sql.query("SELECT id_orders, users_id_users, address, orders.status, phone, contact, hour, date, services, description, employee.first_name, employee.last_name, id_employee, img FROM fraccionamiento.orders, fraccionamiento.users, fraccionamiento.employee where users_id_users = id_users AND id_employee = employee_id_employee", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        } 
        result(null, res);
    });
};

Orders.getOrdersByUserId = (id, result) => {
    console.log('modelo');
      sql.query("SELECT * FROM fraccionamiento.orders fraccionamiento.employee WHERE users_id_users = ? AND id_employee = employee_id_employee", id, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        } 
        result(null, res);
    });
};





module.exports = Orders;
