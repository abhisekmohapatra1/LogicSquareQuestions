import React, { useState } from 'react';
import EditEmployeeModal from './EditEmployeeModal';

const EmployeeItem = ({ employee, onEdit, onDelete }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (editedEmployee) => {
    onEdit(editedEmployee);
    setShowEditModal(false);
  };

  const handleDelete = () => {
    // You might want to show a confirmation prompt here
    onDelete(employee.id);
  };

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.designation}</td>
      <td>{employee.department}</td>
      <td>{employee.available ? 'Available' : 'Not Available'}</td>
      <td>
        <button onClick={() => setShowEditModal(true)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
      {showEditModal && (
        <EditEmployeeModal
          employee={employee}
          onClose={() => setShowEditModal(false)}
          onSave={handleEdit}
        />
      )}
    </tr>
  );
};

export default EmployeeItem;
