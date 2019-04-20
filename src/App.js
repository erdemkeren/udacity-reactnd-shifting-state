import React, { Component } from "react";
import "./App.css";

const styles = {
  screen: {
    width: "300px",
    height: "120px",
    margin: "50px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(249, 171, 27)",
    padding: "20px",
    userSelect: "none"
  },
  numberBox: {
    width: "70px",
    height: "100px",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF"
  },
  numberContainer: {
    fontFamily: "'Pattaya', sans-serif",
    fontSize: 48,
    textAlign: "center",
    display: "block"
  }
};

const PullButton = props => <div onClick={props.onClick}>Pull</div>;

const NumberBox = props => {
  return (
    <div style={styles.numberBox}>
      <span style={styles.numberContainer}>{props.number}</span>
    </div>
  );
};

const Won = props => <div>You won! Jackpot!</div>;

class Screen extends React.Component {
  state = {
    won: false,
    numbers: []
  };

  generateNumber = () => Math.floor(Math.random() * 10);

  generateNumbers = () => {
    return [
      this.generateNumber(),
      this.generateNumber(),
      this.generateNumber()
    ];
  };

  pull = () => {
    const numbers = this.generateNumbers();

    const won = numbers.reduce((acc, number) => {
      return acc && number === 7;
    }, []);

    this.setState({ won, numbers });
  };

  componentDidMount() {
    this.pull();
  }

  render() {
    const { won, numbers } = this.state;

    return (
      <div style={styles.screen}>
        {won && <Won />}
        {!won &&
          numbers.map((number, i) => <NumberBox key={i} number={number} />)}
        {!won && <PullButton onClick={this.pull} />}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Screen />
      </div>
    );
  }
}

export default App;
