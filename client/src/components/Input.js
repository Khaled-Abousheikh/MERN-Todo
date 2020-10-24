import React, { Component } from "react";
import axios from "axios";
class Input extends Component {
  state = {
    action: "",
  };

  // addItem = (e) => {
  //   e.preventDefault();
  //   console.log("Hello World");
  // };
  addTodo = () => {
    const task = { action: this.state.action };
    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task) //This is where proxy helps
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
          }
        })
        .catch((err) => console.log(err.response));
    } else {
      console.log("Input field is required");
    }
  };

  handleChange = (event) => {
    this.setState({ action: event.target.value });
  };

  render() {
    // let { action } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.action}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}
export default Input;
