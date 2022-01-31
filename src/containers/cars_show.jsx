import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CarsShow extends Component {
  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="car-item">
          <h3>{this.props.car.brand}</h3>
          <p>{this.props.car.model}</p>
          <p>{this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
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

export default connect(mapStateToProps)(CarsShow);
