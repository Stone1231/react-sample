import React from "react";

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>hi</td>
          <Columns />
          <Columns2 />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

class Columns2 extends React.Component {
  render() {
    return (
      <>
        <td>Hello2</td>
        <td>World2</td>
      </>
    );
  }
}

export default Table;
