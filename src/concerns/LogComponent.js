import React, { Component } from "react";

const LogComponent = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      console.log("log user data");
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default LogComponent;
