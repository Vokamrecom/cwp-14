module.exports = (Sequelize, sequelize) => {
    return sequelize.define('actors', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birth: {
            type: Sequelize.STRING,
            allowNull: false
        },
        films: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        liked: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        photo: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
};