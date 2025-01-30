const db = require('../models/database');

const attachDb = (req, res, next) =>{
    req.db = db;
    next();
}

module.exports = {attachDb};