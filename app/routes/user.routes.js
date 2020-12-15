module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const autobus = require("../controllers/autobus.controller.js");
    const advertisements = require("../controllers/advertisements.controller.js");
    const rules = require("../controllers/rules.controller.js");
    const events = require("../controllers/events.controller.js");
    const complaints = require("../controllers/complaints.controller.js");
    const division = require("../controllers/division.controller.js");
    const employee = require("../controllers/employee.controller.js");
    const voting = require ("../controllers/voting.controller.js");


    var multer = require('multer')
    const path = require('path')

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
        filename: (req, file, cb) => {

            if (file.mimetype == 'application/pdf') {
                console.log('hola');
                file.fieldname = 'recibo';
            }
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });

    const upload = multer({ storage });


    //const company = require("../controllers/companies.controller.js");
    //const checkToken = require("./middleware");

    //app.get('/users', autobus.findAll);

    // auth user route
    app.post('/auth', users.login);

    //app.use(checkToken);

    // Create a new Customer
    //app.post("/users", users.create);

    // Retrieve all Customers
    app.get("/users", users.findAll);
    app.get("/users/:userId", users.findById);

    app.post("/users", users.postUsers);
    app.get("/users/manager", users.getManager);
    app.get("/division/:divisionId/users", division.getUsersByDivision);
    app.get("/division/:id", users.getManager);
    ///////////////////////////////////////////////////////////////////////
    app.post("/users/:userId/receipt", upload.single('file'), users.receipt);
    ///////////////////////////////////////////////////////////////////////
    app.get("/disabledUsers", users.disabledUsers);
    app.get("/usersStatus/:id", users.usersStatus);
    app.put("/activeuser/:id", users.activeUser);



    





    app.get("/division", division.getAll);
    app.post("/divisions", division.postDivision);

    app.get("/payments/:userId", users.payments);
    ////////////////////////////////////////////////////////
    app.post("/payments/:userId", users.postPayments);
    ///////////////////////////////////////////////////////////////////////
    app.get("/division/:divisionId/payments/", users.allPayments); 


    


    app.get("/lastPayments/:userId", users.getLastPayment);

    // Avisos
    app.get("/advertisements", advertisements.findAll);
    app.get("/advertisements/:divisionId", advertisements.findById);
    app.post("/advertisements/:divisionId", advertisements.postAdvertisements);

    // Reglas
    app.get("/rules", rules.findAll);
    app.get("/rules/:divisionId", rules.getRulesByDivision)
    app.post("/rules/:divisionId", rules.postRules);

    // Eventos
    app.get("/events", events.findAll);
    app.get("/events/:divisionId", events.getEventsByDivision);
    app.post("/events/:divisionId", events.postEvents);

    // Quejas
    app.get("/complaints", complaints.findAll);
    app.post("/complaints/:divisionId", complaints.postComplaints);
    
    // Empleados
    app.get("/employee", employee.findAll);
    app.get("/employee/:idEmployee/stars", employee.findStars);

    app.get("/services", employee.findServices);
    // Busca en base a si necesita un servicio o pruducto
    app.get("/services/need/:needId", employee.findNeed);

    app.post("/services/category", employee.findByCategory);

    app.post("/services/area", employee.findByArea);

    app.post("/services/activity", employee.findByActivity);

    // app.post("/services/order", employee.postOrder);








    app.get("/voting/:divisionId", voting.findByDivision);

    app.post("/voting/:divisionId", voting.postVoting);


    app.get("/vote/:votingId", voting.findVoteByVotingId);

    app.post("/vote/:votingId", voting.postVote);



    




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
