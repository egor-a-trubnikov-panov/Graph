import React, {Component, PropTypes as pt} from 'react';
import cx from 'classnames';
import FitText from 'react-fittext'

import styles from './Text.styl';

export default class Text extends Component {
  static propTypes = {
    mode: pt.oneOf(['changed', 'default']),
    children: pt.string,
    onChangeText: pt.func,
    onChangeMode: pt.func
  };

  static defaultProps = {
    mode: 'default',
    width: 100,
    height: 50,
    color: 'black'
  };

  handleChangeText = event => {
    const {onChangeText} = this.props;
    const newValue = event.target.value;
    onChangeText(newValue);
  };

  handleChangeMode = () => {
    const {onChangeMode, mode} = this.props;
    switch (mode) {
      case 'changed':
        onChangeMode('default');
        console.info(this.textarea.focus());
        break;
      case 'default':
        onChangeMode('changed');
        break;
      default:
        onChangeMode('default');
    }
  };

  setTextArea = ref => {
    this.textarea = ref
  };

  render() {
    const {mode, children, width, height, color} = this.props;
    return (
      <div
        className={
          cx(styles[`mode_${mode}`], styles.TextEdit)
        }
        style={{width, height, color}}
      >
        {(mode === 'changed') && (
          <div className={styles.inputWrapper}>
            <textarea
              className={styles.textarea}
              ref={this.setTextArea}
              onChange={this.handleChangeText}
            >
              {children}
              </textarea>
            <button
              className={styles.button}
              onClick={this.handleChangeMode}
            >
              ✓
            </button>
          </div>
        )}
        {(mode === 'default') && (
          <div
            className={styles.text}
            onClick={this.handleChangeMode}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}
