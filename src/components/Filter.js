import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setStarRatingFilter,
  setFacilitiesFilter
} from "../actions/filters";

export class Filter extends Component {
  
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onStarRatingChange = e => {
    this.props.setStarRatingFilter(e.target.value);
  };

  onFacilitiesChange = (e, i) => {
    this.props.setFacilitiesFilter(e.target.value);
  };

  renderRadioButtons(maxStarRating) {
    // TODO: Pull max star rating dervied from max of all hotels
    // TODO: Convert to checkboxes, we want to be able to filter based on multiple selections
    let radioButtons = [];
    for (let i = 0; i < maxStarRating; i++) {
      radioButtons.push(
        <span key={i}>
          <input
            type="radio"
            value={i + 1}
            name="starRating"
            onChange={this.onStarRatingChange}
          />
          {i + 1}
        </span>
      );
    }
    return radioButtons;
  }

  renderCheckBoxes() {
    // TODO: Pull all available facilities directly from available hotels.
    return this.props.availableFacilities.map((facility, i) => (
      <label key={i}>
        {facility}
        <input
          name={facility}
          value={facility}
          type="checkbox"
          onChange={this.onFacilitiesChange}
        />
      </label>
    ));
  }

  render() {
    return (
      this.props.filters && (
        <div style={{ border: "1px solid tomato" }}>
          <h1>Filter</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="text"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="form-group">
            <label>Star Rating</label>
            {this.renderRadioButtons(5)}
          </div>
          <div className="form-group">
            <label>Facilities</label>
            {this.renderCheckBoxes()}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log("​state", state);
  return {
    filters: state.filters,
    // Trying to get too fancy!
    availableFacilities: state.hotels.reduce(
      (acc, hotel) => (
        [].push.apply(acc, hotel.facilities.filter(v => acc.indexOf(v) === -1)),
        acc
      ),
      []
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    setStarRatingFilter: starRating =>
      dispatch(setStarRatingFilter(starRating)),
    setFacilitiesFilter: facility => dispatch(setFacilitiesFilter(facility))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
