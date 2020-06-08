import React from "react";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectID: 0 };
  }

  sumArrow(id, e) {
    // this.setState({
    //   selectID: id,
    // });
    this.setState((state) => ({
      selectID: state.selectID + id,
    }));
  }

  sumBind(id) {
    this.setState((state) => ({
      selectID: state.selectID + id,
    }));
  }

  render() {
    return (
      <div>
        {this.state.selectID}
        <table>
          <thead>arrow functions</thead>
          <tbody>
            {this.props.list.map((item, i) => (
              <tr>
                <td>{item.title}</td>
                <td>
                  {/*e 這個參數所代表的 React 事件將會被當作 ID 之後的第二個參數被傳遞下去。*/}
                  {/*在使用 arrow function 時，我們必須明確地將它傳遞下去，但若使用 bind 語法，未來任何的參數都將會自動被傳遞下去*/}
                  <button onClick={(e) => this.sumArrow(item.id, e)}>
                    +{item.id}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>Function.prototype.bind</thead>
          <tbody>
            {this.props.list.map((item, i) => (
              <tr>
                <td>{item.title}</td>
                <td>
                  <button onClick={this.sumBind.bind(this, item.id)}>
                    +{item.id}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const taskList = [
  { id: 1, title: "一" },
  { id: 2, title: "二" },
];

export { TaskList, taskList };
