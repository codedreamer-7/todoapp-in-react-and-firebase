import React, { Component } from "react";
import equal from "fast-deep-equal";

const propsWithoutLocation = props => {
  const { location, ...rest } = props;
  return rest;
};

export default WrappedComponent => {
  class HOC extends Component {
    shouldComponentUpdate(nextProps) {
      if (
        equal(propsWithoutLocation(nextProps), propsWithoutLocation(this.props))
      ) {
        return false;
      }
      return true;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};
