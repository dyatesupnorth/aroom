import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

export class Filter extends Component {
  // Handy snippet to handle most cases of form input state changes
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
