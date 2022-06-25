export default function initUserModel(sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      shirtSize: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      netWorth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
}
