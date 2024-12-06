const User = require('../models/user');
const db = require('../models/db'); // Kết nối DB


// Lấy danh sách người dùng
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('users', { users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// // Tạo người dùng mới
// exports.createUser = async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     await User.create({ name, email });
//     res.redirect('/users');
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

exports.addUser = async (req, res) => {
    const { CCCD, MatKhau, Email, HoTen, SDT } = req.body;

    console.log('Dữ liệu nhận được:', req.body);  // Kiểm tra dữ liệu từ client

    // Kiểm tra các trường bắt buộc
    if (!CCCD || !MatKhau || !Email || !HoTen) {
        return res.status(400).json({ message: 'Các trường không được để trống!' });
    }

    // Kiểm tra mật khẩu theo yêu cầu
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(MatKhau)) {
        return res.status(400).json({ message: 'Mật khẩu không đủ yêu cầu!' });
    }

    try {
        const newUser = await User.create({ CCCD, MatKhau, Email, HoTen, SDT });
        res.status(201).send(newUser);
    } catch (error) {
        console.error('Lỗi khi thêm người dùng:', error);
        res.status(500).send('Lỗi khi thêm người dùng!');
    }
};
