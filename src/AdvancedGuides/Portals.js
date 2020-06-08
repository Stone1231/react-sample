import React from "react";
import ReactDOM from "react-dom";

let modalRoot;

// export default function App() {
//     return (
//         <div className="parent">
//             {createPortal(<div className="child">Child content</div>, document.body)}
//             Parent content
//         </div>
//     );
// }

const modalStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "fixed",
  height: "100%",
  width: "100%",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const appRootStyle = {
  height: "10em",
  width: "10em",
  background: "lightblue",
  overflow: "hidden",
};

const modalRootStyle = {
  position: "relative",
  zIndex: "999",
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");

    modalRoot = document.getElementById("modal-root");
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div style={modalStyle}>
      <button>Click</button>
    </div>
  );
}

//export default Parent;
export default (
  <>
    <div id="app-root" style={appRootStyle}></div>
    <div id="modal-root" style={modalRootStyle}></div>
    <button
      onClick={() => {
        ReactDOM.render(<Parent />, document.getElementById("app-root"));
      }}
    >
      start
    </button>
  </>
);
