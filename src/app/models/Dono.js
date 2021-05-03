import Sequelize, { Model } from "sequelize";

class Dono extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    Dono.hasMany(models.Prato); 
  }
}

export default Dono;