import React, { useState, useEffect } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';

const Employee = () => {
  const initialEmployeeState = [
    { id: 1, name: 'John Doe',  address: '123 Street, City', phone: '1234567890'},
    { id: 2, name: 'Jane Smith',  address: '456 Avenue, Town', phone: '9876543210'},
    { id: 3, name: 'Michael Johnson',  address: '789 Road, Village', phone: '5678901234' },
  ];

  const [employees, setEmployees] = useState(initialEmployeeState);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

  useEffect(() => {
    const { name, address, phone } = newEmployee;
    setIsAddButtonDisabled(!(name && address && phone));
  }, [newEmployee]);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee) => {
    setEditedEmployee(employee);
  };

  const handleSave = () => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === editedEmployee.id ? { ...editedEmployee } : employee
      )
    );
    setEditedEmployee(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleAddEmployee = () => {
    setEmployees(prevEmployees => [
      ...prevEmployees,
      {
        id: prevEmployees.length + 1,
        ...newEmployee
      }
    ]);
    setNewEmployee({
      name: '',
      address: '',
      phone: '',
    });
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevNewEmployee => ({
      ...prevNewEmployee,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 flex-1">
      <div className="mb-4 mt-3 item-start">
        <strong className="text-gray-700 font-medium mb-2">Add Employee</strong>
        <div className="flex flex-col item-start">
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleNewInputChange}
          placeholder="Employee Name"
          className="border border-gray-400 p-2 w-1/2 m-2"
        />
        <input
          type="text"
          name="address"
          value={newEmployee.address}
          onChange={handleNewInputChange}
          placeholder="Employee Address"
          className="border border-gray-400 p-2 w-1/2 m-2"
        />
        <input
          type="text"
          name="phone"
          value={newEmployee.phone}
          onChange={handleNewInputChange}
          placeholder="Employee Phone Number"
          className="border border-gray-400 p-2 w-1/2 m-2"
        />
        </div>
        
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 px-2 my-5 mx-2 rounded"
          onClick={handleAddEmployee}
          disabled={isAddButtonDisabled}
        >
          Add Employee
        </button>
      </div>

      <strong className="text-gray-700 font-medium">View Employees</strong>
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Address</th>
              <th className="py-2">Phone Number</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  {editedEmployee && editedEmployee.id === employee.id ? (
                    <input type="text" name="name" value={editedEmployee.name} onChange={handleInputChange} />
                  ) : (
                    employee.name
                  )}
                </td>
                <td>
                  {editedEmployee && editedEmployee.id === employee.id ? (
                    <input type="text" name="address" value={editedEmployee.address} onChange={handleInputChange} />
                  ) : (
                    employee.address
                  )}
                </td>
                <td>
                  {editedEmployee && editedEmployee.id === employee.id ? (
                    <input type="text" name="phone" value={editedEmployee.phone} onChange={handleInputChange} />
                  ) : (
                    employee.phone
                  )}
                </td>
                <td>
                  {editedEmployee && editedEmployee.id === employee.id ? (
                    <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded font-bold mr-2" onClick={handleSave}><RxUpdate /></button>
                  ) : (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEdit(employee)}><AiFillEdit /></button>
                  )}
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded font-bold" onClick={() => handleDelete(employee.id)}><MdDeleteForever /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
