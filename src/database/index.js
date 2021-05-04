import Sequelize from  'sequelize'

import User from '../app/models/User'
import Prato from '../app/models/Prato'
import Dono from '../app/models/Dono'

import databaseConfig from '../config/database'
const models = [User, Prato, Dono]

  class Database{
      constructor(){
        this.init();
      }
      init(){
        this.connection = new Sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
      }
    }

    export default new Database();