import React from "react";

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2 style={{ color: "green" }}>People Counting App</h2>
        <p style={{ fontSize: "18px" }}>Entry Count: {this.state.entrycount}</p>
        <p style={{ fontSize: "18px" }}>Exit Count: {this.state.exitcount}</p>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={this.UpdateEntry}
            style={{
              marginRight: "20px",
              padding: "10px 20px",
              fontSize: "16px"
            }}
          >
            Login
          </button>

          <button
            onClick={this.UpdateExit}
            style={{
              padding: "10px 20px",
              fontSize: "16px"
            }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
