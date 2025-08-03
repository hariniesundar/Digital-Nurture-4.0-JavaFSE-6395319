import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>✈️ Ticket Booking App</h1>
        <div style={{ marginTop: '40px' }}>
          {this.state.isLoggedIn ? (
            <UserPage onLogout={this.handleLogout} />
          ) : (
            <GuestPage onLogin={this.handleLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
