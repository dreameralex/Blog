module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
    res.render('users', 
        {
            title: 'Users',
            description : 'This is the description of all the users' });
    })
}


var User = require("../models/users");
module.exports.controller = (app) => {
    // get all users
    app.get('/users/:id', (req, res) => {
        // User.find({}, 'name email', function (error, users) {
        //     if (error) { console.log(error); }
        //     res.send(users);
        // })
        // User.findById(req.params.id).then((users) =>{
        //     console.log("test")
        //     res.send(users);
        // }).catch((error) =>{
        //     console.log(error);
        // })
        User.findById(req.params.id, 'name email')
        .then(user => {
         done(null, user);
        })
        .catch(err => {
          done(err, null);
        });

    })
}