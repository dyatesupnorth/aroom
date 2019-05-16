import React, { Component } from "react";
import { connect } from "react-redux";
import { startGetHotels } from "../actions/hotels";
export class HotelList extends Component {
  render() {
    return (
      <div style={{ border: "1px solid tomato" }}>
        <h1>HotelList</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startGetHotels: () => dispatch(startGetHotels())
});

const mapStateToProps = state => {
  return {
    hotels: state
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelList);
