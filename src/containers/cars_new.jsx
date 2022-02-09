import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return [
      <div className="row garage-container">
        <div className="list-group-item col-xs-3 card-trip">
          <img src="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <div className="card-trip-infos">
            <h3>{this.props.garage}</h3>
            <p>Our garage is the most reliable and will be happy to advise no matter the type of vehicle.</p>
            <Link className="btn btn-default" to="/">Back to list </Link>
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="" className="card-trip-user avatar-bordered" />
          </div>
        </div>
        <div className="new-car-form col-xs-9" >
          <div className="form-container">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <label htmlFor="InputBrand">Brand</label>
                <Field
                  name="brand"
                  type="text"
                  component="input"
                  label="Brand"
                  placeholder="Toyota"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputModel">Model</label>
                <Field
                  name="model"
                  type="text"
                  component="input"
                  label="Model"
                  placeholder="Coriolla"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputOwner">Owner</label>
                <Field
                  name="owner"
                  type="text"
                  component="input"
                  label="Owner"
                  placeholder="Jack Sparrow"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="InputPlate">Plate</label>
                <Field
                  name="plate"
                  type="text"
                  component="input"
                  label="Plate"
                  placeholder="EGU-503H"
                  className="form-control"
                />
              </div>
              <div className="submit-button">
                <button type="submit">Add car</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, { addCar })(CarsNew));
