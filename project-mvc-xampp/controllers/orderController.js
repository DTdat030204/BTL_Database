const db = require('../models/db'); // Kết nối DB

exports.listOrders = async (req, res) => {
  try {
    const [orders] = await db.query('SELECT * FROM hoadon');
    res.render('index', { orders });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi server');
  }
};
