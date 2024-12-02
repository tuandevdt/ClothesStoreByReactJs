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
      paranoid: true, // Soft delete
    }
  );

  // Định nghĩa quan hệ trong hàm associate
  Product.associate = (models) => {
    // Mối quan hệ với Category
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });

    // Mối quan hệ với Cart
    Product.hasMany(models.Cart, {
      foreignKey: "productId",
      as: "carts",
    });

    // Mối quan hệ với OrderItem
    Product.hasMany(models.OrderItem, {
      foreignKey: "productId",
      as: "orderItems",
    });

    // Mối quan hệ với Review
    Product.hasMany(models.Review, {
      foreignKey: "productId",
      as: "reviews",
    });

    // Mối quan hệ với ProductVariant
    Product.hasMany(models.Color, {
      foreignKey: "productId",
      as: "colors",
    });
  };

  return Product;
};
