const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./studentschema');

// Kết nối đến database
const queryString = process.env.MONGODB_URI || "mongodb+srv://pccuong92:bwDBx5y8g15ZzQbF@idkman.0zljm.mongodb.net/Student?retryWrites=true&w=majority&appName=IDKman";

// Cấu hình mongoose
mongoose.connect(queryString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB connection error:', err.message));

// API tìm tất cả sinh viên
router.get('/findall', async (req, res) => {
    try {
        const data = await StudentModel.find();
        res.json(data);  // Sử dụng .json để gửi kết quả dưới dạng JSON
        console.log('Data retrieved');
    } catch (err) {
        console.error('Error finding data:', err);
        res.status(500).send("Error finding data");
    }
});

// API thêm một sinh viên
router.post('/add', async (req, res) => {
    try {
        const { StudentId, Name, Date, Address } = req.body;  // Nhận dữ liệu từ request body
        const newStudent = new StudentModel({
            StudentId,
            Name,
            Date,
            Address
        });
        await newStudent.save();
        res.status(201).send("Data inserted");
        console.log("Data inserted");
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).send("Error inserting data");
    }
});



module.exports = router;
