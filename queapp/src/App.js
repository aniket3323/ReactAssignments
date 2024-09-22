import React, { useState } from 'react';
import AddUser from './Component/AddUser';
import UserList from './Component/UserList';


const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    }

    return (
        <div>
            <h1>User List</h1>
            <AddUser addUser={addUser} />
            <UserList users={users} />
        </div>
    );
}

export default App;
