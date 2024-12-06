const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route hiển thị danh sách đơn hàng
router.get('/', orderController.listOrders);

module.exports = router;
