import React from "react";
import { connect } from "react-redux";
import selectHotels from "../selectors/hotels";
import { HotelListItem } from "./HotelListItem";
export const HotelList = props => {
  console.log("​props", props);
  return (
    <div style={{ border: "1px solid tomato" }}>
      {props.hotels.length === 0 ? (
        <p>No hotels</p>
      ) : (
        props.hotels.map(hotel => {
          return <HotelListItem key={hotel.name} {...hotel} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hotels: selectHotels(state.hotels, state.filters)
  };
};
export default connect(
  mapStateToProps,
  undefined
)(HotelList);
