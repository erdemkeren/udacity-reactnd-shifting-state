import React, { Component } from "react";
import "./App.css";

const styles = {
  screen: {
    width: "300px",
    height: "120px",
    margin: "50px auto 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(249, 171, 27)",
    padding: "20px",
    userSelect: "none"
  },
  numberBox: {
    width: 70,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    color: "rgb(230, 85, 85)",
    borderColor: "rgb(181, 148, 91)",
    borderWidth: 3,
    borderStyle: "solid"
  },
  numberContainer: {
    fontFamily: "'Pattaya', sans-serif",
    fontSize: 48,
    textAlign: "center",
    display: "block",
    fontWeight: "bolder"
  },
  pullButton: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    color: "white",
    borderRadius: 45,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1.5,
    cursor: "pointer"
  }
};

const PullButton = props => (
  <div onClick={props.onClick} style={styles.pullButton}>
    Pull
  </div>
);

const NumberBox = props => {
  const cls = props.number === 7 ? "imageRot" : "";

  return (
    <div style={styles.numberBox} className={cls}>
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
    }, true);

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
