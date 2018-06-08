import React, { Component } from "react";
import { Header, Store } from "./components";
import fetch from "./api/mock";

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#fff"
  }
};
class App extends Component {
  state = {
    cartCounter: 0
  };
  reserveItem = () => {
    return fetch("https://example.com/-/v1/stock/reserve", {
      method: "POST"
    }).then(({ ok }) => {
      ok &&
        this.setState(({ cartCounter }) => ({
          cartCounter: cartCounter + 1
        }));
    });
  };
  render() {
    const { cartCounter } = this.state;
    const { container } = styles;
    return (
      <div style={container}>
        <Header cartCounter={cartCounter} />
        <Store reserveItem={this.reserveItem} />
      </div>
    );
  }
}

export default App;
