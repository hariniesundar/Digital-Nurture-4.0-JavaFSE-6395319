import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rupees: '',
      euros: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  };

  sayHello = () => {
    console.log("Hello! Increment button clicked.");
    alert("Hello! You have clicked increment.");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  handleInputChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const euros = (this.state.rupees / 89).toFixed(2);
    this.setState({ euros });
  };

  render() {
    const cardStyle = {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff'
    };

    return (
      <div style={{ padding: '40px', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f4f7f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>React Event Examples Dashboard</h2>

        {/* Counter Section */}
        <div style={cardStyle}>
          <h3>Counter: {this.state.count}</h3>
          <button onClick={this.increment} style={{ marginRight: '10px' }}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>

        {/* Say Welcome */}
        <div style={cardStyle}>
          <h3>Say Welcome</h3>
          <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
            Say Welcome
          </button>
        </div>

        {/* Synthetic Event */}
        <div style={cardStyle}>
          <h3>Synthetic Event</h3>
          <button onClick={this.onPress}>Click Me</button>
        </div>

        {/* Currency Converter */}
        <div style={cardStyle}>
          <h3>Currency Converter (INR ➝ EUR)</h3>
          <input
            type="number"
            placeholder="Enter ₹ amount"
            value={this.state.rupees}
            onChange={this.handleInputChange}
            style={{
              padding: '8px',
              width: '200px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
          <button onClick={this.handleSubmit}>Convert</button>
          {this.state.euros && (
            <p style={{ marginTop: '10px' }}>
              {this.state.rupees} INR = <strong>{this.state.euros} EUR</strong>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
