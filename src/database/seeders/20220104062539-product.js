/** @format */

const uuid = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("product", [
      {
        id: uuid.v4(),
        title: "Pakian Pria",
        description: "Pakaian Pria yang Trendi dan nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/baju_pria_YWvsBgzx1.jpg?updatedAt=1641046526258",
        price: "Rp580.000",
        stock: 20,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1
      },
      {
        id: uuid.v4(),
        title: "Pakaian Wanita",
        description: "Pakaian Wanita yang Trendi dan nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/baju_wanita_0UvoLKYve.jpg?updatedAt=1641046526354",
        price: "Rp550.00",
        stock: 25,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1
      },
      {
        id: uuid.v4(),
        title: "Pakaian  Muslimah",
        description: "Pakaian Muslimah yang Trendi dan nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/pakaianbatik_yM5FWg6bTFn.jpg?updatedAt=1641046531266",
        price: '"Rp225.000',
        stock: 30,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1
      },
      {
        id: uuid.v4(),
        title: "Jam Tangan",
        description: "Jam Tangan yang nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/jamtangan_IiL86R0PZ.jpg?updatedAt=1641046530365",
        price: "Rp120.000",
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2
      },
      {
        id: uuid.v4(),
        title: "Kacamata",
        description: "Kacamata baca anti radiasi yang nyaman di gunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/kacamta_Bw1KmoqVHxL.jpeg?updatedAt=1641046530318",
        price: "Rp350.000",
        stock: 15,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3
      },
      {
        id: uuid.v4(),
        title: "Sepatu Pantofel",
        description: "Sepatu Pantofel yang nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/sepatu_pantofel_uGsNGAOqh.jpg?updatedAt=1641046532157",
        price: "Rp420.000",
        stock: 25,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4
      },
      {
        id: uuid.v4(),
        title: "Sepatu Sekolah",
        description: "Sepatu  yang cocok di gnukan untuk ank sekolahan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/sepatu_pelajar_AllP-_0oINq.jpg?updatedAt=1641046533480",
        price: "Rp320.000",
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4
      },
      {
        id: uuid.v4(),
        title: "Sepatu wanita",
        description: "Sepatu wanita yang nyaman digunakan",
        image:
          "https://ik.imagekit.io/naum4sbu8x9d/images/sepatu_wanita_uxzjTvPsd.jpg?updatedAt=1641046533276",
        price: "Rp320.000",
        stock: 7,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4
      },
      {
        id: uuid.v4(),
        title: "Topi",
        description: "Topi yang nyaman yang Trendi dan nyaman digunakan",
        image:
          "https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_wristwatch_K0thprUNvJCp.jpg?updatedAt=1638956842087",
        price: "Rp125.000",
        stock: 15,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 5
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("product", null);
  }
};
