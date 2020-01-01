import React from 'react';
import { connect } from 'react-redux';
import { clickedButton } from '../actions/buttonActions';

const Button = ({ clickedButton }) => {
  const handleClick = () => {
    clickedButton();
  };

  return (
    <button onClick={() => handleClick()} type="button">Click me!</button>
  );
};

const mapDispatchToProps = dispatch => ({
  clickedButton: () => dispatch(clickedButton()),
});


export default connect(null, mapDispatchToProps)(Button);
