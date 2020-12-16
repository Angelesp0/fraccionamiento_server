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
    console.log(newUser);
    sql.query("INSERT INTO fraccionamiento.orders SET ?", new_Order, (err, res) => {
        if (err) {
            console.log("error1: ", err);
            result(err, null);
            return;
        }
        console.log("Voto realizado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};


module.exports = Orders;
