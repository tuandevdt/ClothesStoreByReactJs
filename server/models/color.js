module.exports = (sequelize, DataTypes) => {
const Color = sequelize.define(
    "Color",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products", // Tên bảng trong cơ sở dữ liệu
          key: "id", // Khóa chính của bảng Product
        },
      },
    },
    {
      timestamps: true,
    }
  );

  Color.associate = function (models) {
    Color.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product", 
    });
    Color.hasMany(models.Size, {
      foreignKey: "colorId",
      as: "sizes",
    });
    Color.hasMany(models.Cart, {
      foreignKey: "colorId",
      as: "carts",
    });
  };

  return Color;
};
