import React, { Component } from 'react'
import './style.css';

class Button extends Component {
  render () {
    return (
      <button className={'button ' + 'button-' + this.props.type}>
        <span>按钮新样式</span>
      </button>
    );
  }
}

export default Button;