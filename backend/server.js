const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/AttendanceApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose model for your student
const Student = mongoose.model('Student', {
  studentID: String,
  name: String,
  year: Number,
  branch: String,
  attendance: [{ date: Date, status: String, subject: String }]
});

// API endpoint to fetch student names and attendance
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API endpoint to update student attendance
// API endpoint to update student attendance
app.post('/students/:id/attendance', async (req, res) => {
  try {
    const { date, status, subject } = req.body;
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.attendance.push({ date, status, subject });
    await student.save();

    // Notify that attendance has been taken
    const studentName = student.name;
    res.status(201).json({ message: `Attendance has been taken for ${studentName}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// API endpoint to fetch attendance for a specific day and month
app.get('/attendance', async (req, res) => {
  try {
    const { day, month } = req.query;

    const students = await Student.find();
    
    const attendanceData = students.map(student => {
      const attendance = student.attendance.find(record => {
        const recordDate = new Date(record.date);
        return recordDate.getDate() === parseInt(day) && recordDate.getMonth() + 1 === parseInt(month);
      });
      return {
        name: student.name,
        status: attendance ? attendance.status : 'absent'
      };
    });

    if (attendanceData.length === 0) {
      return res.status(404).json({ message: "Attendance has not been recorded for this day" });
    }

    res.json(attendanceData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));