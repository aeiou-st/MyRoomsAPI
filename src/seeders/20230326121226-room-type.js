module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('room_types',
      [
        {
          id: 1,
          room_type_name: 'House',
          image: '2023-03-26-House.png',
          order: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          room_type_name: 'Apartment',
          image: '2023-03-26-Apartment.png',
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          room_type_name: 'Land',
          image: '2023-03-26-Land.png',
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          room_type_name: 'Town House',
          image: '2023-03-26-TownHouse.png',
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('room_types', null, {});
  }
};