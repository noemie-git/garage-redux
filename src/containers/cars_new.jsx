import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

class CarsNew extends Component {
  render() {
    return (
      <div className="row garage-container">
        <div className="list-group-item col-xs-3 card-trip">
          <img src="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <div className="card-trip-infos">
            <p>Our garage is the most reliable and will be happy to advise no matter the type of vehicle.</p>
            <Link className="btn btn-default" to="/">Back to list </Link>
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="" className="card-trip-user avatar-bordered" />
          </div>
        </div>
        <div className="list-group-item col-xs-9">
          <div className="new-car-form">
          </div>
        </div>
      </div>
    );
  }
}

export default CarsNew;
