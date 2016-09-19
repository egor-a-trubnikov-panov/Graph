import React, { Component, PropTypes as pt } from 'react';
import { connect } from 'react-redux';
import Select from '../../components/Sellect';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import Link from '../../components/Link';
import { setCourse } from '../../redux/modules/cource';
import styles from './App.styl';

@connect(
  ({ settings, course }) => ({
    settings, course
  })
)
class App extends Component {
  static propTypes = {
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
    course: pt.object,
    dispatch: pt.func
  };

  handleChange = value => {
    const { dispatch } = this.props;
    dispatch(setCourse(value));
  };

  render() {
    const { course: { rateList = [], rateHistoryMap = {}, rateBarList = [], selectedValue = '' } } = this.props;
    return (
      <div>
        <Select
          selectedValue={selectedValue}
          onChange={this.handleChange}
          value={rateList}
        />
        <LineChart
          data={rateHistoryMap[selectedValue]}
        />
        <div className={styles.linkWrapper}>
          <Link href='/detail'>Подробно</Link>
        </div>
        <BarChart
          yAxisLabel='RUB'
          data={rateBarList}
        />
      </div>
    );
  }
}

export default App;
