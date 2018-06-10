import React, { Component } from "react";
import Alert from "react-s-alert";
import fetch from "./api/mock";
import { Header, Store } from "./components";
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

  reserveItem = (urn, quantity) => {
    return fetch("https://example.com/-/v1/stock/reserve", {
      method: "POST",
      body: [
        {
          urn,
          quantity
        }
      ]
    }).then(({ ok, status, description }) => {
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
