const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Import kết nối Sequelize


const User = sequelize.define('NguoiDung', {
    CCCD: {
        type: DataTypes.STRING(12),
        allowNull: false, // Không cho phép null
        primaryKey: true,
    },
    MatKhau: {
        type: DataTypes.STRING(255),
        allowNull: false, // Không cho phép null
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false, // Không cho phép null
        unique: true,
    },
    HoTen: {
        type: DataTypes.STRING(100),
        allowNull: false, // Không cho phép null
    },
    SDT: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true,
    },
}, {
    tableName: 'NguoiDung',
    timestamps: false,
});


module.exports = User;
