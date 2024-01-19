import React, { useState, useEffect } from 'react';
const EditEmployeeModal = ({ employee, onClose, onSave }) => {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  useEffect(() => {
    setEditedEmployee({ ...employee });
  }, [employee]);

  const handleSave = () => {
    onSave(editedEmployee);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Employee</h2>
        <label>Name:</label>
        <input
          type="text"
          value={editedEmployee.name}
          onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="text"
          value={editedEmployee.age}
          onChange={(e) => setEditedEmployee({ ...editedEmployee, age: e.target.value })}
        />
        <label>Designation:</label>
        <input
          type="text"
          value={editedEmployee.designation}
          onChange={(e) => setEditedEmployee({ ...editedEmployee, designation: e.target.value })}
        />
        <label>Department:</label>
        <select
          value={editedEmployee.department}
          onChange={(e) => setEditedEmployee({ ...editedEmployee, department: e.target.value })}
        >
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Testing">Testing</option>
          <option value="Deployment">Deployment</option>
        </select>
        <label>Availability:</label>
        <input
          type="checkbox"
          checked={editedEmployee.available}
          onChange={() =>
            setEditedEmployee({ ...editedEmployee, available: !editedEmployee.available })
          }
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
