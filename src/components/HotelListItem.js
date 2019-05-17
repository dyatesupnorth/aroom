import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const renderStars = noOfStars => {
	console.log("​noOfStars", noOfStars)
  let stars = [];
	
  for (let i = 0; i < noOfStars; i++) {
		console.log("​i", i)
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  console.log("​stars", stars)
  return stars;
};
export const HotelListItem = props => {
  return (
    <ListGroup.Item className="list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.name}</h5>
      </div>
      <p className="mb-1">{renderStars(props.starRating)}</p>
      <small>
        {!props.facilities || props.facilities.length === 0 ? (
          ''
        ) : (
          <span>
            <ul className="list-inline">
              {props.facilities.map(facility => {
                return (
                  <li className="list-inline-item" key={facility}>
                    {facility}
                  </li>
                );
              })}
            </ul>
          </span>
        )}
      </small>
    </ListGroup.Item>
  );
};

export default HotelListItem;
