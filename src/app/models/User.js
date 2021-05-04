import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    User.belongsTo(models.Prato, {foreignKey: 'prato_id', as: 'prato'});
  }
}

export default User;