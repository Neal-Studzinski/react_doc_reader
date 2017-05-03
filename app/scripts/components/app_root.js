import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from '../containers/all.js'
import Confirm from './confirm.js';

class AppRoot extends React.Component {
  render() {
    return (
      <section>
        <Confirm />
      </section>
    );
  }
}

export default connect(container.allState)(AppRoot);
