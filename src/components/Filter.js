import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter, setStarRatingFilter } from "../actions/filters";

export class Filter extends Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
    console.log(e.target.value);
  };

  onStarRatingChange = e => {
    this.props.setStarRatingFilter(e.target.value);
    console.log(e.target.value);
  };

  render() {
    return (
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
          <input
            type="radio"
            value="1"
            name="starRating"
            onChange={this.onStarRatingChange}
          />{" "}
          1
          <input
            type="radio"
            value="2"
            name="starRating"
            onChange={this.onStarRatingChange}
          />{" "}
          2
          <input
            type="radio"
            value="3"
            name="starRating"
            onChange={this.onStarRatingChange}
          />{" "}
          3
          <input
            type="radio"
            value="4"
            name="starRating"
            onChange={this.onStarRatingChange}
          />{" "}
          4
          <input
            type="radio"
            value="5"
            name="starRating"
            onChange={this.onStarRatingChange}
          />{" "}
          5
        </div>
      </div>
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
    setStarRatingFilter: starRating => dispatch(setStarRatingFilter(starRating))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
