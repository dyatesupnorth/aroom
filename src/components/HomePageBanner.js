import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export class HomePageBanner extends Component {
  render() {
    return (
      <Jumbotron
        fluid
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',
          backgroundSize: "cover",
          backgroundRepeat  : 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '30rem'
        }}
      >
      <h2 className="mt-3 text-white">Welcome to ARoom</h2>
      </Jumbotron>
    );
  }
}

export default HomePageBanner;
