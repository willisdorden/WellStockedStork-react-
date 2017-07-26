const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require("../db/models");

const jwtSecret = process.env.JWT_SECRET;

exports.userRegister = (req, res) => {
    const { first_name, last_name, email, username, password } = req.body;

    db.Users.create({
        first_name,
        last_name,
        email,
        username,
        password: generateHash(password),
    }).then(function(user) {
        // Create the JSON-WebToken
        const token = jwt.sign({
            data: {
                uid: user.id,
                username: user.username
            }
        }, jwtSecret, {
            expiresIn: '12h'
        });
        res.set("Set-Cookie", `token=${token}`);
        // Send the json object to the app.js
        res.status(200).json({
            success: true,
            user,
            token
        });
    }).catch(function(error) {
        console.log(error);
        res.status(500).json({ success: false });
    });

};

exports.userLogin = (req, res) => {
    db.Users.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(user) {
        if (!user || !validatePassword(req.body.password, user.password)) {
            res.status(401).json({
                message: 'Incorrect username or password'
            });
        } else {

            const token = jwt.sign({
                data: {
                    uid: user.id,
                    username: user.username
                }
            }, jwtSecret, {
                expiresIn: '12h'
            });
            res.set("Set-Cookie", `token=${token}`);
            res.status(200).json({
                success: true,
                user,
                token
            });
        }
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({ success: false });
    })
};

exports.Questions = (req,res) => {
    db.surveyQuestions.findAll({
        where:{
            callId: 1,
        },

          include: [{
             model: db.surveyAnswers
            }]
    }).then(function(surveyQuestions) {
        res.status(200).json({
            success: true,
            surveyQuestions,
        })
    })
};

exports.grooming =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 1,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.forfun =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 2,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.handyhelper =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 3,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.kitchen =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 4,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.necessities =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 5,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.nursery =(req,res) => {
    db.Ecomoms.findAll({
        where:{
            callid: 6,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chicgrooming =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 1,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chicforfun =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 2,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chichandyhelper =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 3,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chickitchen =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 4,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chicnecessities =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 5,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.chicnursery =(req,res) => {
    db.Chicmoms.findAll({
        where:{
            callid: 6,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalgrooming =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 1,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalforfun =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 2,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalhandyhelper =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 3,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalkitchen =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 4,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalnecessities =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 5,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};

exports.practicalnursery =(req,res) => {
    db.Practicalmoms.findAll({
        where:{
            callid: 6,
        }
    }).then(function (Ecomoms) {
        res.status(200).json({
            success:true,
            Ecomoms,
        })
    })
};


function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validatePassword(password, storedPassword) {
    return storedPassword ? bcrypt.compareSync(password, storedPassword) : false;
}