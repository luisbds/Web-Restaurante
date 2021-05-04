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
    Prato.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
    Prato.belongsTo(models.Dono, {foreignKey: 'dono_id', as: 'dono'});
  }
}

export default Prato;