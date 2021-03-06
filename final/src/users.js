import React, {useState, useEffect} from 'react';
import UserDisplay from './Users/UserDisplay.js';
import UserInput from './Users/UserInput';

function Users() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)  
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [update])

  const rerender = () =>{
    var newVal = update + 1;
    console.log(newVal);
    setUpdate(newVal);
  }

  return <div>
      <UserDisplay users={users}/>
      <UserInput notifyParent = {rerender}/>
  </div>;
}

export default Users;