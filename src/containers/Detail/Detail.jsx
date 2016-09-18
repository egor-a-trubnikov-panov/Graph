import React, { Component, PropTypes as pt } from 'react';
import { connect } from 'react-redux';
import LineChart from '../../components/LineChart';
import Link from '../../components/Link';
import styles from './Detail.styl';

@connect(
  ({ settings, course }) => ({
    settings, course
  })
)
class Detail extends Component {
  static propTypes = {
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
    course: pt.object,
    dispatch: pt.func
  };

  render() {
    const { course: { rateHistoryMap = {}, selectedValue = '' } } = this.props;
    return (
      <div className={styles.Detail}>
        <Link href='/'>Назад</Link>
        <LineChart
          data={rateHistoryMap[selectedValue]}
        />
      </div>
    );
  }
}

export default Detail;
