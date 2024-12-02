module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define(
        "Size",
        {
          name: {
            type: DataTypes.STRING(50),
            allowNull: false,
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
          },
          colorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "colors", // Tên bảng trong cơ sở dữ liệu
              key: "id", // Khóa chính của bảng Product
            },
          },
        },
        {
          timestamps: true,
          paranoid: true, // Hỗ trợ xóa mềm
        }
      );
    
      Size.associate = function (models) {
        Size.belongsTo(models.Color, {
          foreignKey: "colorId",
          as: "sizes",
        });
        Size.hasMany(models.Cart, {
          foreignKey: "sizeId",
          as: "carts",
        });
      };
      
    
      return Size;
    };
    