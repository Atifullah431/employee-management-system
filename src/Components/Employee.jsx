    import React, { useState } from "react";

    const Employee = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [city, setCity] = useState("");

    // Employees ki list
    const [employees, setEmployees] = useState([]);

    function handleAdd() {
        const newEmployee = {
        id: Date.now(),
        name: name,
        role: role,
        city: city,
        };

        setEmployees([...employees, newEmployee]);

        setName("");
        setRole("");
        setCity("");
    }

    return (
        <div className="mt-8 p-5">
        <h1 className="text-3xl font-bold mb-5">
            Employee Management System
        </h1>

        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            className="border p-2 mr-2"
        />

        <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="Enter Role"
            className="border p-2 mr-2"
        />

        <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter City"
            className="border p-2 mr-2"
        />

        <button
            onClick={handleAdd}
            className="border px-4 py-2 cursor-pointer"
        >
            Add Employee
        </button>

        <hr className="my-5" />

        {employees.map((employee) => (
            <div
            key={employee.id}
            className="border p-3 rounded mb-3"
            >
            <h2>Name: {employee.name}</h2>
            <p>Role: {employee.role}</p>
            <p>City: {employee.city}</p>
            </div>
        ))}
        </div>
    );
    };

    export default Employee;