const { Sequelize } = require('sequelize');

// Kết nối đến cơ sở dữ liệu
const sequelize = new Sequelize('btl_database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Kết nối thành công!'))
  .catch(err => console.error('Lỗi kết nối:', err));

module.exports = sequelize;
