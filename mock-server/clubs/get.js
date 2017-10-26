const Chance = require("chance");

const chance = new Chance();

const get = (req, res) => {
    res.status(200).send({
        name: chance.name()
    });
};

module.exports = get;