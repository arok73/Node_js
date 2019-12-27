const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const UserController = {
    // uuden käyttäjän rejisteröinti
    registerUser: function(res, req, next) {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        User.create(
            {
                username: req.body.username,
                password: hashedPassword,
                isadmin: req.body.isadmin
            },
            (err, user) => {
                if (err) {
                    return res
                        .status(500)
                        .send("Käyttäjän rekisteröinti epäonnistui.");
                }
                const payload = {
                    username: user.username,
                    isadmin: user.isadmin
                };
                console.log(payload);
                const token = jwt.sign(payload, "hyvinsalainenmerkkijono", {
                    expiresIn: 60 * 60 * 24
                });
                res.json({
                    success: true,
                    message: "Tässä valmis Token!",
                    token: token
                });
            }
        );
    },
    authenticateUser: function (req, res, next)  {
        User.findOne({
            
        })
    }
};
