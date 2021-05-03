import Sequelize, { Model } from "sequelize";

class Prato extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        categoria: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    Prato.belongsTo(models.Dono);
    Prato.belongsTo(models.User);
  }
}

export default Prato;