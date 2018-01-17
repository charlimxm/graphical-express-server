import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'test_graphql_db',
  'test_graphql_admin',
  'iamapassword',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const db = {
  User: sequelize.import('./user')
}

// loop thr all the models and set up associations
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
