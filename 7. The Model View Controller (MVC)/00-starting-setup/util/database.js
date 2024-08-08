const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "nodecomplete", {
  diaelect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
