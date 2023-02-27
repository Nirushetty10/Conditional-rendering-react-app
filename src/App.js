import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  let[users , setUsers] = useState([]);

  let usersHandler =(user)=>{
     setUsers((oldUsers)=>{
        return [user , ...oldUsers]
     })
  }

  return (
    <div>
      <AddUser onSubmitUser={usersHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;