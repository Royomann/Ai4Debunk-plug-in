'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //add a new column for community notes
    await queryInterface.addColumn("website_data", "community_note", {
        type: Sequelize.STRING(500),
        allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    //remove the community notes column
    await queryInterface.removeColumn("website_data", "community_note");
  }
};