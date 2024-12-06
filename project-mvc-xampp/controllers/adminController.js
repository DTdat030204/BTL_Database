const db = require('../models/db'); 

const getNumberProductSoldbyId = (req, res) => {
     const { MaNguoiBan } = req.body;  

    if (!MaNguoiBan) {
        return res.status(400).json({ message: 'Mã người bán không được để trống' });
    }
    db.execute('CALL TinhSoLuongSanPhamDaBan(?)', [MaNguoiBan], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Lỗi khi truy vấn cơ sở dữ liệu' });
        }
        if (results[0][0]['Số Lượng Sản Phẩm Đã Bán'] !== null) {
            return res.json({ SoLuongDaBan: results[0][0]['Số Lượng Sản Phẩm Đã Bán'] });
        } else {
            return res.json({ message: results[0][0]['Thông Báo'] });
        }
    });
};

const getRating = (req, res) => {
    const { MaCuaHang } = req.body;  

    if (!MaCuaHang) {
        return res.status(400).json({ message: 'Mã cửa hàng không hợp lệ' });
    }
    db.execute('CALL KiemTraDanhGiaCuaHang(?)', [MaCuaHang], (err, results) => {
        if (err) {
        console.error('Lỗi khi gọi thủ tục: ', err);
        return res.status(500).json({ message: 'Lỗi khi gọi thủ tục' });
        }
        if (results[0][0]['Số Sao Trung Bình Của Cửa Hàng']) {
        res.json({ 'Số Sao Trung Bình Của Cửa Hàng': results[0][0]['Số Sao Trung Bình Của Cửa Hàng'] });
        } else {
        res.json({ message: 'Cửa hàng này không có sản phẩm nào hoặc không tồn tại.' });
        }
    });
};

module.exports = {
    getNumberProductSoldbyId,
    getRating
};