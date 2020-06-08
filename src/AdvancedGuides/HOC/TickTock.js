import React from "react";

class TickTock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>React has been running for {this.props.seconds} seconds.</p>;
  }
}

// TickTock.propTypes = {
//     seconds: React.PropTypes.number.isRequired,
// }

export default TickTock;
