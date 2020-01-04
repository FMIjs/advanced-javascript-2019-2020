import React from 'react';
import ReactDOM from 'react-dom';
import MyCounter from './my-counter';
import OtherCounter from './other-counter';
import UserList from './user-list';

class App extends React.Component {


  render() {

    return <>
      {/* <MyCounter />
      <OtherCounter /> */}
      <UserList />
    </>
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
