import React, { Suspense } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以至於下一個 render 會顯示 fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你也可以把錯誤記錄到一個錯誤回報系統服務
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以 render 任何客製化的 fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function logErrorToMyService(error, errorInfo) {
  console.log(error);
  console.log(errorInfo);
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  // 錯誤邊界不會捕捉 event handler 裡所發生的錯誤。這邊需要try catch
  handleClick() {
    try {
      // 做某些可以拋出錯誤的事情
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default (
  <ErrorBoundary>
    <MyComponent />
  </ErrorBoundary>
);
