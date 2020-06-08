import React, { useState } from "react";

function Example() {
  // 宣告一個新的 state 變數，我們叫他「count」
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>hooks</button>
    </div>
  );
}

//相等的 Class 範例
class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          class
        </button>
      </div>
    );
  }
}

const ExampleToo = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>hooks</button>
        </div>
    );
}

export default (
  <>
    <Example />
    <ExampleClass />
    <ExampleToo />
  </>
);
