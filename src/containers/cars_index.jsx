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
              <h2><strong>{car.brand.toUpperCase()} {car.model.toUpperCase()}</strong></h2>
              <p><strong>Owner: </strong>{car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="row garage-container">
        <div className="list-group-item col-xs-3 card-trip">
          <img src="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div className="card-trip-infos">
            <h3>Garage {this.props.garage}</h3>
            <p>Our garage is the most reliable and will be happy to advise no matter the type of vehicle.</p>
            <Link className="btn btn-default" to="/cars/new">Add a car</Link>
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" className="card-trip-user avatar-bordered" />
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
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
