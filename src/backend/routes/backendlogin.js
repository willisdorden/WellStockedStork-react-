


exports.register = function(req,res){
    // console.log("req",req.body);
    const today = new Date();
    // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
    //save to db
    const users={
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "password":req.body.password,
        "username":req.body.username,
        "created":today,
        "modified":today
    };
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            //  console.log('The solution is: ', results);
            res.send({
                "code":200,
                "success":"user registered sucessfully"
            });
        }
    });
    // });


}

exports.login = function(req,res){
    const userid= req.body.userid;
    const password = req.body.password;
    connection.query('SELECT * FROM users WHERE userid = ?',[userid], function (error, results, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
            if(results.length >0){
                if(results[0].password == req.body.password){
                    if(results[0].role == req.body.role){
                        const file = './userdata/userid.json'
                        const obj = {userid: req.body.userid}
                        jsonfile.writeFile(file, obj, function (err) {
                            if(err){
                                console.log("Error ocurred in writing json during login at login handler in login routes",err);
                            }
                        });
                        res.send({
                            "code":200,
                            "success":"login sucessfull"
                        })
                    }
                    else{
                        res.send({
                            "code":204,
                            "success":"You have logged in from wrong user role"
                        })
                    }

                }
                else{
                    res.send({
                        "code":204,
                        "success":"Email and password does not match"
                    })
                }

            }
            else{
                res.send({
                    "code":204,
                    "success":"Email does not exits"
                });
            }


        }
    });
}