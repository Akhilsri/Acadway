import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentID || !name || !year || !branch || !subject) {
      alert('Please fill all fields');
      return;
    }
    onAddStudent({ studentID, name, year, branch, subject });
    setStudentID('');
    setName('');
    setYear('');
    setBranch('');
    setSubject('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input
        type="text"
        placeholder="Student ID"
        value={studentID}
        onChange={(e) => setStudentID(e.target.value)} id='filterInput'
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button type="submit" className="add-student-button">Add the student</button>
    </form>
  );
}

export default AddStudentForm;


{/* <AddStudentForm onAddStudent={handleAddStudent} /> */}