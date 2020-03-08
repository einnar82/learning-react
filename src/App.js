import React, { Component } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Profile from "./components/Profile";
import LogComponent from "./concerns/LogComponent";
import { httpClient } from "./helpers";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    name: "Rannie",
    age: 0,
    todos: []
  };

  static defaultProps = {
    animal: "Hen"
  };

  handleTextChange = evt => {
    evt.persist();
    this.setState(
      {
        [evt.target.name]: evt.target.value
      },
      () => {
        console.log(evt);
      }
    );
  };

  showHomePage = () => {
    const { name, age } = this.state;
    return (
      <div className="App">
        <Hello name={name} />
        <Profile />
        <p>My name is {name}</p>
        <p>My age is {age}</p>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={this.handleTextChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          placeholder="Enter age"
          onChange={this.handleTextChange}
        />
      </div>
    );
  };

  showNotFound = () => {
    const { name } = this.state;
    return (
      <div>
        <h1>User is not {name}</h1>
      </div>
    );
  };

  logData = () => {
    console.log("Logging data!");
  };

  componentDidMount() {
    httpClient({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "get"
    }).then(response => {
      this.setState({
        todos: response.data
      });
    });
  }

  render() {
    const { name, todos } = this.state;
    // return name === "Rannie" ? this.showHomePage() : this.showNotFound();
    return (
      <ul>
        {todos.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </ul>
    );
  }
}

export default LogComponent(App);
