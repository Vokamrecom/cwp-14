module.exports = (Sequelize, sequelize) => {
    return sequelize.define('ActorFilms', {
        actorId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        filmId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
};