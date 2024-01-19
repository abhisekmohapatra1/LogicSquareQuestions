import React, { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployeeModal from './AddEmployeeModal';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch employees from local storage on component mount
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    // Save employees to local storage whenever the employees state changes
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (employee) => {
    setEmployees([employee, ...employees]);
    setShowModal(false);
  };

  const handleEditEmployee = (editedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === editedEmployee.id ? editedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };

  const handleDeleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== employeeId);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <div className="dashboard">
        <div className="overview">
          <p>Total Employees: {employees.length}</p>
          <p>Available Employees: {employees.filter((employee) => employee.available).length}</p>
        </div>
        <div className="employee-list">
          <EmployeeList
            employees={employees}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
          />
        </div>
        <button onClick={() => setShowModal(true)}>Add Employee</button>
      </div>
      {showModal && <AddEmployeeModal onClose={() => setShowModal(false)} onSave={handleAddEmployee} />}
    </div>
  );
};

export default App;
