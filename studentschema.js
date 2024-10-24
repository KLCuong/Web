const mongoose = require('mongoose');

// Chỉnh sửa schema theo cấu trúc trong ảnh
const Studentschema = new mongoose.Schema({
    StudentId: Number,  // Chỉnh sửa thành 'StudentId'
    Name: String,
    Date: Date,         // Chỉnh sửa thành 'Date' để phù hợp với MongoDB
    Address: String
});

module.exports = mongoose.model('student', Studentschema, 'Student');
