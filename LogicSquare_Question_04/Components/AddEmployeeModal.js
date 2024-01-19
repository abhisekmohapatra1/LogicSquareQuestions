import React, { useState } from 'react';

const AddEmployeeModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSave = () => {
    // Basic form validation
    if (name && age && designation && department) {
      const newEmployee = {
        id: Date.now(),
        name,
        age: parseInt(age, 10),
        designation,
        department,
        available,
      };
      onSave(newEmployee);
    } else {
      alert('Please fill all mandatory fields and ensure age is a number.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Employee</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <label>Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Testing">Testing</option>
          <option value="Deployment">Deployment</option>
        </select>
        <label>Availability:</label>
        <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
