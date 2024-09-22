import React from 'react';

const UserList = ({ users }) => {
    return (
        <table id="tbl" border="1" style={{ marginTop: '20px' }}>
            <thead>
                <tr >
                    <th>Username</th>
                    <th>Gender</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.gender}</td>
                        <td>{user.dateOfBirth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;



