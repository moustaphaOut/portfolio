import React, { Component } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
const Context = React.createContext();

export class Provider extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div>
          <Context.Provider value="">{this.props.children}</Context.Provider>
        </div>
        <Footer />
      </div>
    );
  }
}
export const Consumer = withRouter(Context.Consumer);
