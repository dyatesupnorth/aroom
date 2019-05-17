import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
