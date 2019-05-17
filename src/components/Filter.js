import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setStarRatingFilter,
  setFacilitiesFilter
} from "../actions/filters";

export class Filter extends Component {
  state = {
    availableFacilities: ["car park", "pool", "gym"]
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
    console.log(e.target.value);
  };

  onStarRatingChange = e => {
    this.props.setStarRatingFilter(e.target.value);
    console.log(e.target.value);
  };

  onFacilitiesChange = e => {
    console.log("​Filter -> e", e.target.checked);
    //If facility exists and target.checked is false, remove it
    this.props.setFacilitiesFilter(e.target.value);
 
  };

  renderRadioButtons(maxStarRating) {
    //TODO: Pull max star rating dervied from max of all hotels
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
    return this.state.availableFacilities.map((facility, i) => (
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

  render(props) {
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
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    setStarRatingFilter: starRating =>
      dispatch(setStarRatingFilter(starRating)),
    setFacilitiesFilter: facilities => dispatch(setFacilitiesFilter(facilities))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
