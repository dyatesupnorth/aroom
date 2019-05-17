import React from "react";
import { connect } from "react-redux";
import selectHotels from "../selectors/hotels";
import { HotelListItem } from "./HotelListItem";
import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";

export const HotelList = props => {
  return (
    <Card>
      <ListGroup variant="flush">
        {props.hotels.length === 0 ? (
          <p>No hotels</p>
        ) : (
          props.hotels.map(hotel => {
            return <HotelListItem key={hotel.name} {...hotel} />;
          })
        )}
      </ListGroup>
    </Card>
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
