import React from "react";

export class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      flavor: "coconut",
      flavors: ["coconut", "mango"],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value;
    switch (target.type) {
      case "checkbox":
        value = target.checked;
        break;
      case "select-multiple":
        // let flavors = this.state.flavors;
        let list = this.state[name];
        let index = list.indexOf(target.value);
        if (index > -1) {
          list.splice(index, 1);
        } else {
          list.push(target.value);
        }
        value = list;
        break;
      default:
        value = target.value;
        break;
    }
    console.log(value);
    // const value = target.name === "isGoing" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "isGoing: " +
        this.state.isGoing +
        "\nnumberOfGuests: " +
        this.state.numberOfGuests +
        "\nflavor: " +
        this.state.flavor +
        "\nflavors: " +
        this.state.flavors
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select
            name="flavor"
            value={this.state.flavor}
            onChange={this.handleInputChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label style={{ color: "red" }}>
          Pick your favorite flavors:
          <br />
          <select
            multiple={true}
            value={this.state.flavors}
            name="flavors"
            onChange={this.handleInputChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isGoing = React.createRef();
    this.numberOfGuests = React.createRef();
    this.flavor = React.createRef();
    this.flavors = React.createRef();
  }

  handleSubmit(event) {
    let selectedOptions = [];
    for (let i = 0; i < this.flavors.current.selectedOptions.length; i++) {
      selectedOptions[i] = this.flavors.current.selectedOptions[i].value;
    }
    // for (const element in this.flavors.current.selectedOptions) {
    //   selectedOptions.push(element.value);
    // }
    // this.flavors.current.selectedOptions.map((element) => {
    //   selectedOptions.push(element.value);
    //   //console.log(element);
    // });
    alert(
      "isGoing: " +
        this.isGoing.current.checked +
        "\nnumberOfGuests: " +
        this.numberOfGuests.current.value +
        "\nflavor: " +
        this.flavor.current.value +
        "\nflavors: " +
        selectedOptions
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input type="checkbox" ref={this.isGoing} defaultChecked />
        </label>
        <br />
        <label>
          Number of guests:
          <input type="number" ref={this.numberOfGuests} defaultValue="5" />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select ref={this.flavor} defaultValue="lime">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          Pick your favorite flavors:
          <br />
          <select
            ref={this.flavors}
            multiple={true}
            defaultValue={["grapefruit", "coconut"]}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
