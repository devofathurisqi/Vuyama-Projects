'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class instagram extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    instagram.init({
        feed: DataTypes.STRING,
        link: DataTypes.STRING
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'instagram',
    });
    return instagram;
};