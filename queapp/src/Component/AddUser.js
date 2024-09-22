import React, { useState } from 'react';
import UserList from './UserList';

const AddUser = () => {
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!username || !gender || !dateOfBirth) {
            setError('All fields are required.');
            return;
        }

        // Add new user to the users array
        const newUser = { username, gender, dateOfBirth };
        setUsers([...users, newUser]);

        // Reset form
        setUsername('');
        setGender('');
        setDateOfBirth('');
    };

    return (
        <div>
           <form onSubmit={handleSubmit}>
    <h2>User List</h2>
    <table>
        <tr>
            <td>
                <label id="">Username:</label>
            </td>
            <td>
                <input
                    type="text"
                    id="uname"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td>
                <label>Gender:</label>
            </td>
            <td>
                <select
                    value={gender}
                    id="uname"
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <label>Date of Birth:</label>
            </td>
            <td>
                <input
                    type="date"
                    id="uname"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button type="submit" id="btn">Add User</button>
            </td>
        </tr>
    </table>
</form>

            {users.length > 0 && <UserList users={users} />}
        </div>
    );
};

export default AddUser;
