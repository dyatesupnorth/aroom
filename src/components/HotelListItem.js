import React, { Component } from "react";

export const HotelListItem = props => {
  return (
    <div style={{ border: "1px solid tomato" }}>
      <h2>{props.name}</h2>
      <p>Star rating: {props.starRating}</p>
      {props.facilities.length === 0 ? (
        <p>No facilities</p>
      ) : (
        <p>
          Facilities:
          {props.facilities.map(facility => {
            return <span>{facility}</span>;
          })}
        </p>
      )}
    </div>
  );
};

export default HotelListItem;
