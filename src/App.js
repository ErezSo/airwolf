import React, { Component } from "react";
import { Header, Store } from "./components";

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#fff"
  }
};
class App extends Component {
  render() {
    const { container } = styles;
    return (
      <div style={container}>
        <Header />
        <Store />
      </div>
    );
  }
}

export default App;
