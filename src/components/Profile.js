import React, { Component } from "react";
import LogComponent from "../concerns/LogComponent";

class Profile extends Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          corporis modi! Quod cum eius incidunt reiciendis minima blanditiis
          veniam necessitatibus harum voluptate dolore unde ipsa totam, sunt
          nostrum non praesentium.
        </p>
      </div>
    );
  }
}

export default LogComponent(Profile);
