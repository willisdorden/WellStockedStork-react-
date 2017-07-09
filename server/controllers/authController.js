const db = require("../db/models");


exports.userRegister = (req,res) => {
    db.Users.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    }).then(function(dbUser){
        // console.log("api/profile then");
        res.json({dbUser, success: true});
        // Catch the error and display it on the console
    }).catch(function(error) {
        console.log("api/profile error ");
        console.log(error);
        res.status(500).json(error);
    });

};

exports.userLogin = (req,res) => {
    db.Users.findOne({
        where: {
            username : req.body.username,
            password: req.body.password
}
    }).then(function(dbUser){
        if(dbUser === null){
            res.status(204);
        }
            console.log(dbUser);
            res.json({dbUser, success: true});


    }).catch(function(error){
        res.status(204).json(error);
    })
};
