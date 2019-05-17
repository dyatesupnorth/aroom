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
        <label key={i} className="form-check">
          <input
            type="radio"
            value={i + 1}
            name="starRating"
            className="form-check-input"
            onChange={this.onStarRatingChange}
          />
          <span className="form-check-label">{i + 1}</span>
        </label>
      );
    }
    return radioButtons;
  }

  renderCheckBoxes() {
    // TODO: Pull all available facilities directly from available hotels.
    return this.props.availableFacilities.map((facility, i) => (
      <label key={i} className="form-check">
        <input
          name={facility}
          value={facility}
          type="checkbox"
          className="form-check-input"
          onChange={this.onFacilitiesChange}
        />
        <span className="form-check-label">{facility}</span>
      </label>
    ));
  }

  render() {
    return (
      this.props.filters && (
        <div className="card">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Search by name</h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <div className="form-group ">
                  <label>Name</label>
                  <input
                    className="form-control"
                    name="text"
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                  />{" "}
                </div>
              </div>
            </div>
          </article>
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Facilities </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <form>{this.renderCheckBoxes()}</form>
              </div>
            </div>
          </article>

          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Minimum star Rating </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">{this.renderRadioButtons(5)}</div>
            </div>
          </article>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
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
