import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.title}</h3>
            <p>{car.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Let's add a car!
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}
export default connect(mapStateToProps)(CarsIndex);
