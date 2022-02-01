/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="card-product">
            <img src="../../assets/car-icon.png" />
            <div className="card-product-infos">
              <h2>{car.brand} {car.model}</h2>
              <p>{car.owner}</p>
              <p>{car.plate}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="list-group-item col-sm-3">
          <h3>Garage {this.props.garageName}</h3>
          <Link className="btn btn-cta btn-secondary" to="/cars/new">Add a new car</Link>
        </div>
        <div className="list-group-item col-sm-9">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
