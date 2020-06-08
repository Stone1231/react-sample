import React from "react";

import HOC from "./HOC";
import TickTock from "./TickTock";

const intervalFn = (state) => {
  return { seconds: state.seconds + 1 };
};

const Wrapped = HOC(TickTock, { seconds: 0 }, intervalFn);
const Wrapped2 = HOC(TickTock, { seconds: 3 }, intervalFn);
const Wrapped3 = HOC(TickTock, { seconds: 6 }, intervalFn);

function Demo() {
  return (
    <div>
      <Wrapped />
      <Wrapped2 />
      <Wrapped3 />
    </div>
  );
}
export default Demo;

// // 簡易的 HOC
// const HOC = (WrappedComponent) => {
//   return class simpleHOC extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { say: "good morning" };
//     }
//
//     render() {
//       return <WrappedComponent {...this.props} say={this.state.say} />;
//     }
//   };
// };
// // 要傳入的元件
// class SimpleComp extends React.Component {
//   render() {
//     const { say } = this.props;
//     return <div>Johnny {say}</div>; // Johnny good morning
//   }
// }
// // 使用掛入完的元件
// // const Simple = HOC(SimpleComp);
// export default HOC(SimpleComp);
