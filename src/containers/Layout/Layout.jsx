import React, { Component, PropTypes as pt } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { get as getCourse } from '../../redux/modules/cource';
import styles from './Layout.styl';

@asyncConnect([{
  promise: () => new Promise(resolve => resolve())
}])
@connect(
  ({ settings, course }) => ({
    settings, course
  })
)
class Layout extends Component {
  static propTypes = {
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
    course: pt.object,
    dispatch: pt.func
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getCourse());
    this.loadInterval = setInterval(() => {
      dispatch(getCourse());
    }, 10000);
  }

  componentWillUnmount() {
    if (this.loadInterval) {
      clearInterval(this.loadInterval);
    }
    this.loadInterval = false;
  }

  loadInterval = false;

  render() {
    const { children } = this.props;
    return (
      <div className={styles.Layout}>
        {children}
      </div>
    );
  }
}

export default Layout;
