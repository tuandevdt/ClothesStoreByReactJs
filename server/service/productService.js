const { where } = require("sequelize");
const { Product, Color, Size, Category } = require("../models");

const getAllProduct = async () => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Color,
          as: "colors",
          include: [
            {
              model: Size,
              as: "sizes",
              attributes: ["id", "name", "stock"], // Lấy thông tin size và tồn kho
            },
          ],
          attributes: ["id", "name", "image"], // Lấy thông tin color
        },
      ],
      attributes: ["id", "name", "price", "description", "categoryId"], // Lấy thông tin product
    });
    return products;
  } catch (error) {
    console.error("Error fetching products with variants:", error);
    throw error;
  }
};

const createProduct = async (data) => {
  try {
    const { colors, ...productData } = data;
    const product = await Product.create(productData);
    console.log('products beffore', product);
  
    if (colors && colors.length > 0) {
      for (const colorData of colors) {
        console.log('colordataa', colorData);
        
        const { sizes, ...colorDetails } = colorData;
        console.log('productid', product.id);
        console.log('color detail', colorDetails);
        
        
        const color = await Color.create({
          ...colorDetails,
          productId: product.id,
        });

        if (sizes && sizes.length > 0) {
          for (const sizeData of sizes) {
            console.log('sizeData',sizeData);
            console.log('colorid', color.id);
            
            await Size.create({
              ...sizeData, // Bao gồm: name và stock
              colorId: color.id, // Liên kết với color
            });
          }
        }
      }
    }

    return product;
  } catch (error) {
    console.error("Error creating product with variants:", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Color,
          as: "colors",
          include: [
            {
              model: Size,
              as: "sizes",
              attributes: ["id", "name", "stock"], 
            },
          ],
          attributes: ["id", "name", "image"], 
        },
        {
          model: Category, // Thêm mô hình Category
          as: "category", // Đảm bảo tên alias đúng
          attributes: ["id", "name"], // Lấy id và name của category
        },
      ],
      attributes: ["id", "name", "price", "description", "categoryId"],
    });
    
    return product;
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
}

const updateProduct = async (productId, data) => {
  try {
    // Cập nhật thông tin sản phẩm
    const { colors, ...productData } = data;

    const product = await Product.findOne({where: {id: productId}});
    if (!product) {
      throw new Error('Product not found');
    }

    // Cập nhật thông tin sản phẩm
    await product.update(productData);
    
    if (colors && colors.length > 0) {
      for (const colorData of colors) {
        const { id: colorId, sizes, ...colorDetails } = colorData;

        // Kiểm tra xem màu sắc đã tồn tại chưa
        let color;
        if (colorId) {
          // Cập nhật màu sắc nếu đã tồn tại
          color = await Color.findOne({where: {id: colorId}});
          if (color) {
            await color.update(colorDetails);
          } else {
            // Nếu không tìm thấy, có thể ném lỗi hoặc tạo mới
            color = await Color.create({ ...colorDetails, productId });
          }
        } else {
          // Nếu không có ID màu, tạo mới
          color = await Color.create({ ...colorDetails, productId });
        }

        if (sizes && sizes.length > 0) {
          for (const sizeData of sizes) {
            const { id: sizeId, ...sizeDetails } = sizeData;

            if (sizeId) {
              // Cập nhật kích thước nếu đã tồn tại
              const size = await Size.findOne({where: {id: sizeId}});
              if (size) {
                await size.update(sizeDetails);
              } else {
                // Nếu không tìm thấy, có thể ném lỗi hoặc tạo mới
                await Size.create({ ...sizeDetails, colorId: color.id });
              }
            } else {
              // Nếu không có ID kích thước, tạo mới
              await Size.create({ ...sizeDetails, colorId: color.id });
            }
          }
        }
      }
    }

    return product;
  } catch (error) {
    console.error("Error updating product with variants:", error);
    throw error;
  }
};

const getProductByCategoryId = async (categoryId) => {
  try {
    const products = await Product.findAll({
      where: { categoryId },
      include: [
        {
          model: Color,
          as: "colors",
          include: [
            {
              model: Size,
              as: "sizes",
              attributes: ["id", "name", "stock"], 
            },
          ],
          attributes: ["id", "name", "image"], 
        },
        {
          model: Category, // Thêm mô hình Category
          as: "category", // Đảm bảo tên alias đúng
          attributes: ["id", "name"], // Lấy id và name của category
        },
      ],
      attributes: ["id", "name", "price", "description", "categoryId"],
    });
    
    return products;
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
}

const deleteProduct = async (id) => {
  try {
    const deleteProduct = await Product.destroy({
      where: { id },
    })    
    return deleteProduct;
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
}

const getTop10Products = async () => {
  try {
    const products = await Product.findAll({
      order: [['price', 'DESC']],
      limit: 10,
      include: [{
          model: Color,
          as: 'colors',
          attributes: ['image']
      }],
  });
  
  return products;
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
}

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  getProductByCategoryId,
  deleteProduct,
  getTop10Products
};
