import React, { Component } from 'react';

class CarsIndex extends Component {

  renderCars() {
    // TODO
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
