import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './AttendenceRegister.css'; // Import CSS file

function CheckboxContainer({ studentID, name, isChecked, onToggle }) {
  const handleContainerClick = () => {
    onToggle(name);
  };

  return (
    <div className="checkbox-container" onClick={handleContainerClick}>
      <input type="checkbox" checked={isChecked} onChange={() => {}} />
      <label className={isChecked ? "custom-checkbox checked" : "custom-checkbox"} htmlFor={name}></label>
      <span>{studentID} - {name}</span>
    </div>
  );
}

function AttendenceRegister() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [markedStudents, setMarkedStudents] = useState([]);
  const [showMarkedStudents, setShowMarkedStudents] = useState(false);
  const [filterYear, setFilterYear] = useState('');
  const [filterBranch, setFilterBranch] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  useEffect(() => {
    // Fetch student names from the backend API
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        setFilteredStudents(data);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  useEffect(() => {
    // Apply filters when filter options change
    const filtered = students.filter(student => {
      const yearMatch = filterYear === '' || student.year === parseInt(filterYear);
      const branchMatch = filterBranch === '' || student.branch === filterBranch;
      const subjectMatch = filterSubject === '' || student.attendance.some(att => att.subject === filterSubject);
      return yearMatch && branchMatch && subjectMatch;
    });
    setFilteredStudents(filtered);
  }, [students, filterYear, filterBranch, filterSubject]);

  const toggleStudent = (name) => {
    if (markedStudents.includes(name)) {
      setMarkedStudents(markedStudents.filter((student) => student !== name));
    } else {
      setMarkedStudents([...markedStudents, name]);
    }
  };

  const handleToggleList = () => {
    setShowMarkedStudents(!showMarkedStudents);
  };

  const handleMarkedStudentsSubmit = async () => {
    try {
      if (markedStudents.length === 0) {
        alert('Mark the attendance');
        return;
      }

      markedStudents.forEach(async (studentName) => {
        const student = students.find((s) => s.name === studentName);
        const today = new Date().toISOString().slice(0, 10);
        const attendanceData = {
          date: today,
          status: "present",
          subject: "Your Subject Here" // Update this with your subject
        };
  
        try {
          const response = await fetch(`http://localhost:5000/students/${student._id}/attendance`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(attendanceData)
          });
  
          if (!response.ok) {
            throw new Error('Failed to submit attendance');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });
  
      students.forEach(async (student) => {
        if (!markedStudents.includes(student.name)) {
          const today = new Date().toISOString().slice(0, 10);
          const attendanceData = {
            date: today,
            status: "absent",
            subject: "Your Subject Here" // Update this with your subject
          };
  
          try {
            const response = await fetch(`http://localhost:5000/students/${student._id}/attendance`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(attendanceData)
            });
  
            if (!response.ok) {
              throw new Error('Failed to submit attendance');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        }
      });
  
      setMarkedStudents([]); // Clear marked students after submitting attendance
      alert('Attendance has been recorded');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      const newStudentData = await response.json();
      setStudents([...students, newStudentData]);
      alert('Student added successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFilter = () => {
    // Call the filterStudents function when the filter button is clicked
    filterStudents();
  };

  return (
    <div className="attendence">
     
      <h2>
        {/* <div className="button">
        <button className="back-button" onClick={() => window.history.back()}>Back</button>
        </div> */}
      
        Attendance book</h2>
      {/* <AddStudentForm onAddStudent={handleAddStudent} /> */}
      <div className="filter-bar">
        <select
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">Year</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select
          value={filterBranch}
          onChange={(e) => setFilterBranch(e.target.value)}
        >
          <option value="">Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
          <option value="Bio Technology">Bio Technology</option>
          <option value="Chemical">Chemical</option>
        </select>
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
        >
          <option value="">Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Material Science">Material Science</option>
          <option value="COA">COA</option>
        </select>
        <button className="filter-button" onClick={handleFilter}><span>Filter</span></button>
      </div>
      <div className="students-list">
      {filteredStudents.map((student, index) => (
  <CheckboxContainer 
    key={index}
    studentID={student.studentID} // Add studentID prop
    name={student.name}
    isChecked={markedStudents.includes(student.name)}
    onToggle={toggleStudent}
  />
))}

      </div>
      <h2 onClick={handleToggleList} className="toggle-marked-students">
        {showMarkedStudents ? <FaAngleDown /> : <FaAngleUp />} Marked Students
      </h2>
      {showMarkedStudents && (
        <>
          <ul className="marked-students-list">
            {markedStudents.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
          <div className="submit-button-container">
            <button className="submit-button" onClick={handleMarkedStudentsSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
}

export default AttendenceRegister;
