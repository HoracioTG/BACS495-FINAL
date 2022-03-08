function UserDisplay(props) {
    return <div className="title">
        <h2>
          Here is the list of current users in the database<br/>
          {props.users.map(u => <li key={u.id}>{u.id} - {u.name}</li>)}
        </h2>
    </div>;
  }
  
  export default UserDisplay;