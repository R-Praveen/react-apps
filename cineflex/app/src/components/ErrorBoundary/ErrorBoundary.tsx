import { Component } from "react";

import PropTypes from "prop-types";

interface ErrorBoundaryInterface {
  fallback: Function;
}

class ErrorBoundary extends Component implements ErrorBoundaryInterface {
  state = { hasError: false };
  fallback: Function;

  constructor(props: ErrorBoundaryInterface) {
    super(props);
    this.fallback = props.fallback;
  }

  componentDidMount() {
    console.log("Component - Error Boundary");
  }

  componentDidUpdate() {
    console.log("Component - Error Boundary");
  }

  static propTypes = {
    fallback: PropTypes.func.isRequired,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log(this.fallback);
      return this.fallback();
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
