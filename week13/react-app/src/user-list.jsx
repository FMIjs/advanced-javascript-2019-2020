import React from 'react';
import { myService } from './my-service';

class UserList extends React.Component {
  state = {
    users: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  // componentDidUpdate() {

  // }

  // componentWillUnmount() {

  // }

  render() {
    const { users } = this.state;
    return <>
      {!users ? <div>Loading...</div> : <ul>
        {users.map(user => <li key={user.id}>{user.username}</li>)}
      </ul>}
    </>
  }
}

export default UserList;
