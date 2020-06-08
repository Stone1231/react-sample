import React from "react";

const name = "stone";
const element = <h3>Hello, {name}</h3>;

// ReactDOM.render(
//   <React.StrictMode>
//     {element}
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

export default function IntroducingJSX(props) {
  return <React.StrictMode>{element}</React.StrictMode>;
}
