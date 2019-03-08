"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Todo.associate = models => {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      onDelete: "CASCADE"
    });
  };
  return Todo;
};
