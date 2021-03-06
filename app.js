require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`);
const db = mongoose.connection;
db.on('open', () => {
  console.log(chalk.blue('[API]: '), chalk.green('Connected to Database !!'));
});
db.on('error', () => {
  console.log(chalk.blue('[API]: '), chalk.red('Database not Connected !!'));
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, console.log(chalk.blue('[API]: '), chalk.green('Connected to Port !!')));

module.exports = app;
