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

  renderRadioButtons(maxStarRating) {
    let radioButtons = [];
    for (let i = 0; i < maxStarRating; i++) {
      radioButtons.push(
        <span>
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
          {this.renderRadioButtons(5)}
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
