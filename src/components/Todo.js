import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <p>{todo.title}</p>
      </div>
    );
  }
}

export default Todo;
