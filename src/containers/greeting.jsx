import React from 'react';
import { connect } from 'react-redux';

const Greeting = ({ greeting }) => (
  <div>{ greeting }</div>
);

const mapStateToProps = state => ({
  greeting: state.greeting,
});


export default connect(mapStateToProps)(Greeting);
