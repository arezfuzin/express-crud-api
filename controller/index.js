const chalk = require('chalk');
const Model = require('../model');

module.exports = {
  createData(req, res) {
    console.log(chalk.yellow('[PATH]:'), chalk.cyanBright(req.path));
    const newModel = new Model(req.body);
    newModel.save()
      .then((data) => {
        res.status(200).json({
          message: 'Data Created !',
          data,
        });
      })
      .catch((err) => {
        console.log(chalk.red('[ERROR]: '), err.message);
        res.status(400).json({
          message: 'Can\'t create data',
        });
      });
  },

  getData(req, res) {
    console.log(chalk.yellow('[PATH]:'), chalk.cyanBright(req.path));
    Model.find()
      .then((data) => {
        if (data.length > 0) {
          res.status(200).json({
            message: 'Data found !',
            data,
          });
        } else {
          res.status(200).json({
            message: 'There is no data !',
            data,
          });
        }
      })
      .catch((err) => {
        console.log(chalk.red('[ERROR]: '), err.message);
        res.status(400).json({
          message: 'Can\'t find data',
        });
      });
  },

  getDataById(req, res) {
    console.log(chalk.yellow('[PATH]:'), chalk.cyanBright(req.path));
    Model.findById(req.params.id)
      .then((data) => {
        res.status(200).json({
          message: 'Data found !',
          data,
        });
      })
      .catch((err) => {
        console.log(chalk.red('[ERROR]: '), err.message);
        res.status(400).json({
          message: 'Can\'t find data',
        });
      });
  },

  updateData(req, res) {
    console.log(chalk.yellow('[PATH]:'), chalk.cyanBright(req.path));
    const updateData = req.body;
    Model.updateOne({ _id: req.params.id }, updateData)
      .then(async (data) => {
        const updatedData = await Model.findById(req.params.id);
        if (updatedData && data.n > 0) {
          res.status(200).json({
            message: 'Data updated !',
            updateStatus: data,
            updatedData,
          });
        } else {
          res.status(200).json({
            message: 'No data updated !',
            updateStatus: data,
            updatedData,
          });
        }
      })
      .catch((err) => {
        console.log(chalk.red('[ERROR]: '), err.message);
        res.status(400).json({
          message: 'Can\'t update data',
        });
      });
  },

  removeData(req, res) {
    console.log(chalk.yellow('[PATH]:'), chalk.cyanBright(req.path));
    Model.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.status(200).json({
          message: 'Data deleted !',
          data,
        });
      })
      .catch((err) => {
        console.log(chalk.red('[ERROR]: '), err.message);
        res.status(400).json({
          message: 'Can\'t delete data',
        });
      });
  },
};
