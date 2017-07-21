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
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validatePassword(password, storedPassword) {
    return storedPassword ? bcrypt.compareSync(password, storedPassword) : false;
}