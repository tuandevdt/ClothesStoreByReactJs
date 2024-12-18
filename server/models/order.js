module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      status: {
        type: DataTypes.ENUM(
          "Chờ xác nhận",
          "Đã xác nhận",
          "Đang vận chuyển",
          "Đang giao hàng",
          "Đã giao",
          "Đã hoàn thành",
          "Đã hủy đơn"
        ),
        defaultValue: "Chờ xác nhận", // Giá trị mặc định
      },
      fullname:{
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10,0),
      },
      orderDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Thời gian hiện tại
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users", // Tên bảng trong cơ sở dữ liệu (viết thường)
          key: "id", // Khóa chính của bảng User
        },
      },
    },
    {
      timestamps: true, // Tự động tạo createdAt và updatedAt
    }
  );

  // Định nghĩa các mối quan hệ giữa Order và các model khác
  Order.associate = function (models) {
    // Mối quan hệ với User
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user", // Tên alias cho mối quan hệ
    });

    

    // Mối quan hệ với OrderItem
    Order.hasMany(models.OrderItem, {
      foreignKey: "orderId",
      as: "orderItems", // Tên alias cho mối quan hệ
    });
  };

  return Order;
};