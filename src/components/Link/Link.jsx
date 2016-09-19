import React, { Component, PropTypes as pt } from 'react';
import cx from 'classnames';
import styles from './Link.styl';

export default class Link extends Component {
  static propTypes = {
    mode: pt.oneOf(['default']),
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node), pt.string]),
    href: pt.string,
    className: pt.string
  };

  static defaultProps = {
    mode: 'default',
    children: 'Ссылка',
    href: '#'
  };

  render() {
    const { mode, children, href, className } = this.props;
    return (
      <a
        href={href}
        className={
          cx(styles[`mode_${mode}`], styles.Link, className, {})
        }
      >
        {children}
        <span className={styles.icon}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            width='20'
            height='20'
          >
            <path
              fill='inherit'
              d='M14.2 16.8h-11V5.7H9V5H2.4v12.5h12.5V11h-.7z'
            />
            <path
              d='M18.4 1.6V9h-1.9V4.8l-6.3 6.3-1.3-1.3 6.3-6.3H11V1.6h7.4z'
              fill='inherit'
            />
          </svg>
        </span>
      </a>
    );
  }
}
