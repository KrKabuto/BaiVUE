const express = require('express');
const sql = require('mssql');

// Cấu hình kết nối database
const config = {
  user: 'admin', // Thay đổi thông tin người dùng
  password: 'admin', // Thay đổi mật khẩu
  server: 'localhost', // Thay đổi địa chỉ server
  port: 1433, // Thay đổi cổng kết nối
  database: 'store', // Thay đổi tên database
  options: {
    encrypt: true, // Bật mã hóa kết nối
    trustServerCertificate: true, // Tin tưởng chứng chỉ server
  },
};

// Tạo ứng dụng Express
const app = express();

// **Hàm kết nối database - Được xuất khẩu theo module.exports**
async function connectDatabase() {
  try {
    await sql.connect(config);
    console.log('Kết nối thành công với SQL Server');
  } catch (error) {
    console.error('Lỗi kết nối:', error.message);
    process.exit(1); // Thoát chương trình nếu lỗi kết nối
  }
}

// Hàm lấy danh sách tất cả người dùng
async function selectAllUser() {
  try {
    const result = await sql.query`SELECT * FROM users`;
    return result.recordset;
  } catch (error) {
    console.error('Lỗi truy vấn:', error.message);
    return [];
  }
}

// Hàm đăng nhập
async function login(email, password) {
  try {
    const result = await sql.query`
      SELECT * FROM users
      WHERE email = ${email} AND password = ${password}
    `;
    if (result.recordset.length > 0) {
      console.log('Đăng nhập thành công');
      return true;
    } else {
      console.log('Email hoặc mật khẩu không hợp lệ');
      return false;
    }
  } catch (error) {
    console.error('Lỗi truy vấn:', error.message);
    return false;
  }
}

// Hàm đăng ký
async function register(email, password, fullname, role) {
  try {
    const result = await sql.query`
      INSERT INTO users (email, password, fullname, role)
      VALUES (${email}, ${password}, ${fullname}, ${role})
    `;
    console.log('Đăng ký thành công');
    return true;
  } catch (error) {
    console.error('Lỗi truy vấn:', error.message);
    return false;
  }
}

// Định nghĩa các endpoint API
app.get('/api/users', async (req, res) => {
  const users = await selectAllUser();
  res.json(users);
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const isLoggedIn = await login(email, password);
  res.json({ isLoggedIn });
});

app.post('/api/register', async (req, res) => {
  const { email, password, fullname, role } = req.body;
  const isRegistered = await register(email, password, fullname, role);
  res.json({ isRegistered });
});

// Chạy server
connectDatabase(); // Kết nối database trước khi khởi động server
app.listen(3000, () => console.log('Server lắng nghe trên cổng 3000'));

// **Xuất khẩu hàm connectDatabase**
module.exports = { connectDatabase };
