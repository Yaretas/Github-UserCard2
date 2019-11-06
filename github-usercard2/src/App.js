import React from 'react';
import './App.css';
// import UserCard from './Components/UserCard';

import UserList from './Components/UserList';



class App extends React.Component {
  constructor (){
    super();
    this.state = {
      user: {},
      followers: {}
    };
  }

  componentDidMount(){
    this.getUser();
    this.getFollowers();
  }

  getUser(){
    fetch('https://api.github.com/users/yaretas')
      .then(response => response.json())
      .then(data => this.setState({user: data,}))
  }

  getFollowers() {
    fetch(' https://api.github.com/users/yaretas/followers')
      .then(response => response.json())
      .then(data => this.setState({followers: data}))
  }


  render(){
    console.log(this.state)
  
    return (
      <div className="App">
        <h1>Github and friends</h1>
      <UserList user={this.state.user} />
      </div>
    );
  }
}

export default App;
