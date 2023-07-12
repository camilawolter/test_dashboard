'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('influencers',
    [
      {
        id: 1,
        name: 'Influenciador 1',
        username: '@influencer1',
        category: 'Moda',
        subscribers: 100000,
        platform: 'Instagram',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Influenciador 2',
        username: '@influencer2',
        category: 'Beleza',
        subscribers: 500000,
        platform: 'YouTube',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Influenciador 3',
        username: '@influencer3',
        category: 'Fitness',
        subscribers: 2000000,
        platform: 'TikTok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('influencers', null, {});
  },
};
