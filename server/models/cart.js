module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products", // Tên bảng trong cơ sở dữ liệu (viết thường)
          key: "id", // Khóa chính của bảng Product
        },
      },
    },
    {
      timestamps: true, // Tự động tạo createdAt và updatedAt
    }
  );

  // Định nghĩa các mối quan hệ giữa Cart và các model khác
  Cart.associate = function (models) {
    // Mối quan hệ với Product
    Cart.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product", // Tên alias cho mối quan hệ
    });
  };

  return Cart;
};
