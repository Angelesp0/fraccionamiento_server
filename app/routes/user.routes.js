module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const autobus = require("../controllers/autobus.controller.js");
    const advertisements = require("../controllers/advertisements.controller.js");
    const rules = require("../controllers/rules.controller.js");
    const events = require("../controllers/events.controller.js");
    const complaints = require("../controllers/complaints.controller.js");





    //const company = require("../controllers/companies.controller.js");
    //const checkToken = require("./middleware");

    //app.get('/users', autobus.findAll);

    // auth user route
    //app.post('/auth', users.login);

    //app.use(checkToken);

    // Create a new Customer
    //app.post("/users", users.create);

    // Retrieve all Customers
    app.get("/users", users.findAll);

    app.get("/payments/:userId", users.payments);

    app.get("/advertisements", advertisements.findAll);

    app.get("/rules", rules.findAll);

    app.get("/events", events.findAll);

    app.get("/complaints", complaints.findAll);






    // Retrieve a single Customer with customerId
    //app.get("/users/:userId", users.findOne);

    // Update a Customer with customerId
    //app.put("/users/:userId", users.update);

    // Delete a Customer with customerId
    //app.delete("/users/:userId", users.delete);


    //=======================================================================================//

    // Create a new company
    //app.post("/companies", company.create);

    // Retrieve all companies
    //app.get("/companies", company.findAll);

    // Retrieve a single company with companyId
    //app.get("/companies/:companyId", company.findOne);

    // Update a company with companyId
    //app.put("/companies/:companyId", company.update);

    // Delete a company with companyId
    //app.delete("/companies/:companyId", company.delete);

    // Login
    //app.post("/auth", users.login);

};
