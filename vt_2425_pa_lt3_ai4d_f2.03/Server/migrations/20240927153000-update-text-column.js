'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change the 'text' column type to TEXT
    await queryInterface.changeColumn('website_data', 'text', {
      type: Sequelize.TEXT,
      allowNull: false, // or true, depending on your requirement
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the 'text' column type back to VARCHAR(255) (or whatever it was)
    await queryInterface.changeColumn('website_data', 'text', {
      type: Sequelize.STRING(255), // Adjust as per your original definition
      allowNull: false, // or true, depending on your requirement
    });
  }
};