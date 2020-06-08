import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <h3>It is {this.state.date.toLocaleTimeString()}.</h3>;
  }
}

export default Clock;

// let mountNode = document.getElementById("root14");
// ReactDOM.render(<input value="hi" />, mountNode);
// setTimeout(function () {
//   ReactDOM.render(<input value={null} />, mountNode);
// }, 10000);
