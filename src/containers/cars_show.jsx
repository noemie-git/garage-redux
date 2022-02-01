/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    const numPlate = this.props.car.plate.toUpperCase();
    const brandUpCased = this.props.car.brand.toUpperCase();
    const modelUpCased = this.props.car.model.toUpperCase();

    return (
      <div>
        <div className="car-item">
          <h3>{brandUpCased}</h3>
          <p>{modelUpCased}</p>
          <p>{this.props.car.owner}</p>
          <p>{numPlate}</p>
        </div>
        <Link to="/">
      Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === parseInt(id, 10));
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
