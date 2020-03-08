import React, { Component } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

class Todo extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    const { location } = this.props;
    const post = location.state;
    return (
      <div>
        <h1>Post detail</h1>
        <Card post={post} />
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Todo;
