module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      fullname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING(255), // Thông tin bổ sung, có thể để trống
      },
      ward: {
        type: DataTypes.STRING(100),
        allowNull: false, // Tên phường, không được null
      },
      district: {
        type: DataTypes.STRING(100),
        allowNull: false, // Tên quận, không được null
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false, // Tên thành phố, không được null
      },
      isPrimary: {
        type: DataTypes.TINYINT,
        defaultValue: 0, // Đánh dấu địa chỉ chính, mặc định là 0
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

  // Định nghĩa các mối quan hệ giữa Address và các model khác
  Address.associate = function (models) {
    // Mối quan hệ với User
    Address.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user", // Tên alias cho mối quan hệ
    });

    // Mối quan hệ với Order
    Address.hasMany(models.Order, {
      foreignKey: "addressId",
      as: "orders", // Tên alias cho mối quan hệ
    });
  };
  return Address;
};
