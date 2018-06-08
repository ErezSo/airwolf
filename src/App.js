import React, { Component } from "react";
import { Header, Store } from "./components";
import fetch from "./api/mock";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";

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
    }).then(({ ok, status }) => {
      ok &&
        this.setState(
          ({ cartCounter }) => ({
            cartCounter: cartCounter + 1
          }),
          () => {
            Alert.success("Item was added to cart");
          }
        );
      if (ok === false) {
        status === 500 && Alert.error("Sorry. Something went wrong");
        status === 418 && Alert.warning("Sorry. The item is out of stock");
      }
    });
  };
  render() {
    const { cartCounter } = this.state;
    const { container } = styles;
    return (
      <div style={container}>
        <Header cartCounter={cartCounter} />
        <Store reserveItem={this.reserveItem} />
        <Alert stack={{ limit: 6 }} timeout={3000} position="bottom-right" />
      </div>
    );
  }
}

export default App;
