import React from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUser: null
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.randomuser.me/?results=2");
    const data = await res.json();
    this.setState({ users: data.results });
  }

  handleSelect = (user) => {
    this.setState({ selectedUser: user });
  };

  handleBack = () => {
    this.setState({ selectedUser: null });
  };

  render() {
    const { users, selectedUser } = this.state;

    return (
      <div style={{ fontFamily: "Arial", marginTop: "40px" }}>
        {selectedUser ? (
          <UserDetails user={selectedUser} onBack={this.handleBack} />
        ) : (
          <UserList users={users} onSelect={this.handleSelect} />
        )}
      </div>
    );
  }
}

export default App;
