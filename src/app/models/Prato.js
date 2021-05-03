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
}

export default Prato;