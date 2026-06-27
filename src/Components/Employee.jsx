    import React, { useState } from "react";

    const Employee = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [city, setCity] = useState("");

    const [employees, setEmployees] = useState([]);

    function handleAdd() {
        const newEmployee = {
        id: Date.now(),
        name,
        role,
        city,
        };

        setEmployees([...employees, newEmployee]);

        setName("");
        setRole("");
        setCity("");
    }
    function handleDelete(id) {
    const updatedEmployees = employees.filter(
    (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);
}
    function handleEdit(employee) {
    setName(employee.name);
    setRole(employee.role);
    setCity(employee.city);

    setEditId(employee.id);
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-5">
        <h1 className="text-4xl font-bold text-center mb-8">
            Employee Management System
        </h1>

        <div className="flex gap-3 mb-8">
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            className="border p-3 rounded w-full"
            />

            <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="Enter Role"
            className="border p-3 rounded w-full"
            />

            <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter City"
            className="border p-3 rounded w-full"
            />

            <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 rounded cursor-pointer hover:bg-blue-700"
            >
            Add Employee
            </button>
        </div>

        <div className="space-y-4">
            {employees.map((employee) => (
            <div
                key={employee.id}
                className="border rounded-lg p-5 shadow-md flex justify-between items-center"
            >
                <div>
                <h2 className="text-2xl font-bold">{employee.name}</h2>
                <p className="text-gray-600">Role: {employee.role}</p>
                <p className="text-gray-600">City: {employee.city}</p>
                </div>

                <div className="flex gap-3">
                <button
                    className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 cursor-pointer"
                onClick={() => handleEdit(employee)}
                >
                    Edit
                </button>

                <button
                    className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 cursor-pointer"
                onClick={() => handleDelete(employee.id)}
                >
                    Delete
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default Employee;