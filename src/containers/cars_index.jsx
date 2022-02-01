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
      <div className="row">
        <div className="list-group-item col-xs-3 card-trip">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
          <div className="card-trip-infos">
            <h3>Garage {this.props.garageName}</h3>
            <Link className="btn btn-default" to="/cars/new">Add a new car</Link>
            <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered" />
          </div>
        </div>
        <div className="list-group-item col-xs-9">
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
