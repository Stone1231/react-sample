import React from "react";

const HOC = (Component, state, intervalFn) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = state;
    }

    componentWillMount() {
      this.intervals = [];
    }

    componentWillUnmount() {
      // Unmount 時清除所有 clearInterval
      this.intervals.forEach(clearInterval);
    }

    componentDidMount() {
      // DidMount時執行 setInterval 觸發 tick()
      this.setInterval(this.tick.bind(this), 1000);
    }

    setInterval() {
      // 堆疊 setInterval
      this.intervals.push(setInterval.apply(null, arguments));
    }

    tick() {
      // 觸發變動 state 函數 intervalFn
      this.setState(intervalFn(this.state));
    }

    render() {
      // 配置 props 及 state
      return <Component {...this.props} {...this.state} />;
    }
  };

export default HOC;
