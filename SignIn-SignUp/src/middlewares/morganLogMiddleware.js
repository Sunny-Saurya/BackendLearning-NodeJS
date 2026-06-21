const morgan = require("morgan");

const morganMiddleware = (req, res, next) => {
    morgan( ":method :url :status :response-time ms");

    next();
};

module.exports = morganMiddleware;