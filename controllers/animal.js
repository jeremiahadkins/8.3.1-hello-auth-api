const models = require('../models');

module.exports = {
  detail: (req, res) => {
    const id = req.params.id;
    models.Animal.findById(id).then((result) => {
      res.json(result);
    });
  },
  list: (req, res) => {
    console.log(req.query);
    // callback function while we wait on data
    models.Animal.findAll({
      where: req.query
    }).then((results) => {
      res.json(results);
    });
  },
  create: (req, res) => {
    models.Animal.create({
      name: req.body.name,
      isWearingHat: req.body.isWearingHat,
      isAggressive: req.body.isAggressive,
      species: req.body.species
    }).then((results) => {
      res.json(results);
    });
  }
};
