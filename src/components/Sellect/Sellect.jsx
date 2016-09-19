import React, { Component, PropTypes as pt } from 'react';
import cx from 'classnames';
import styles from './Sellect.styl';

export default class Sellect extends Component {
  static propTypes = {
    mode: pt.oneOf(['default']),
    value: pt.arrayOf(pt.string),
    selectedValue: pt.string,
    onChange: pt.func
  };

  static defaultProps = {
    mode: 'default',
    value: [],
    onChange: Function.prototype,
    selectedValue: ''
  };

  renderOptions = item => (<option key={item} value={item}>{item}</option>);

  handleChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const { mode, value, selectedValue } = this.props;
    return (
      <div
        className={
          cx(styles[`mode_${mode}`], styles.Sellect, {})
        }
      >
        <select onChange={this.handleChange} value={selectedValue}>
          {value.map(this.renderOptions)}
        </select>
      </div>
    );
  }
}
