var jwt = require("jsonwebtoken");
var config = require("./config");

function verifyToken(req, res, next) {
    var token = req.headers["x-access-token"];
    if (!token)
        return res.status(403).send({
            auth: false,
            message: "Vaadittavaa tokenia ei lähetetty."
        });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(500).send({
                auth: false,
                message: "Tokenin autentikointi epäonnistui."
            });

        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;
