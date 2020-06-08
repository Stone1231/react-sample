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

function callback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  //Logic to handle the profiling details
  console.log(
    "The component",
    id,
    ", The phase",
    phase,
    ", Time taken for the update",
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  );
}

export default (
  <>
    <React.Profiler id="clock" onRender={callback}>
      <Clock />
    </React.Profiler>
  </>
);
