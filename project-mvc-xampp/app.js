const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');


const app = express();



app.use(bodyParser.json());

const orderRoutes = require('./routes/order');
app.use('/', orderRoutes);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);


// Thiết lập thư mục views và engine EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // Thư mục static


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${PORT}`);
});
