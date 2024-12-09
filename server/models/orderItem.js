module.exports = (sequelize, DataTypes) => {
const OrderItem = sequelize.define(
    "OrderItem",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "orders", // Tên bảng trong cơ sở dữ liệu (viết thường)
          key: "id", // Khóa chính của bảng Order
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products", // Tên bảng trong cơ sở dữ liệu (viết thường)
          key: "id", // Khóa chính của bảng Product
        },
      },
      colorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "colors", // Tên bảng trong cơ sở dữ liệu cho Color
          key: "id", // Khóa chính của bảng Color
        },
      },
      sizeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "sizes", // Tên bảng trong cơ sở dữ liệu cho Size
          key: "id", // Khóa chính của bảng Size
        },
      },
    },
    {
      timestamps: true, // Tự động tạo createdAt và updatedAt
    }
  );

  // Định nghĩa các mối quan hệ giữa OrderItem và các model khác
  OrderItem.associate = function (models) {
    // Mối quan hệ với Order
    OrderItem.belongsTo(models.Order, {
      foreignKey: "orderId",
      as: "order", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với Product
    OrderItem.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product", // Tên alias cho mối quan hệ
    });
     // Mối quan hệ với Color
     OrderItem.belongsTo(models.Color, {
      foreignKey: "colorId",
      as: "color", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với Size
    OrderItem.belongsTo(models.Size, {
      foreignKey: "sizeId",
      as: "size", // Tên alias cho mối quan hệ
    });
  };

  return OrderItem;
};
