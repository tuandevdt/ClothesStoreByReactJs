module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  Product.associate = function (models) {
    // Mối quan hệ với Category
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với Cart
    Product.hasMany(models.Cart, {
      foreignKey: "productId",
      as: "carts", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với OrderItem
    Product.hasMany(models.OrderItem, {
      foreignKey: "productId",
      as: "orderItems", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với Review
    Product.hasMany(models.Review, {
      foreignKey: "productId",
      as: "reviews", // Tên alias cho mối quan hệ
    });
  };
  return Product;
};
