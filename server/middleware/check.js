const { sequelize } = require('../models');

async function checkAddressId() {
  try {
    const [results] = await sequelize.query("SHOW COLUMNS FROM Orders;");
    console.log('Danh sách cột trong Orders:', results);

    const hasAddressId = results.some(column => column.Field === 'addressId');
    if (hasAddressId) {
      console.log('addressId vẫn còn trong Orders');
    } else {
      console.log('addressId không còn trong Orders');
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra cột:', error);
  }
}

checkAddressId();
