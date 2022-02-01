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
      <div className="row garage-container">
        <div className="list-group-item col-xs-3 card-trip">
          <img src="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <div className="card-trip-infos">
            <h3>Garage {this.props.garage}</h3>
            <p>Our garage is the most reliable and will be happy to advise no matter the type of vehicle.</p>
            <Link to="/">Back </Link>
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="" className="card-trip-user avatar-bordered" />
          </div>
        </div>
        <div className="list-group-item col-xs-9">
          <div className="card-product">
            <img src="../../assets/car-icon.png" alt="car icon" />
            <div className="card-product-infos">
              <h3><strong>{brandUpCased} {modelUpCased}</strong></h3>
              <p><strong>Owner: </strong>{this.props.car.owner}</p>
              <p>{numPlate}</p>
            </div>
          </div>
        </div>
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
