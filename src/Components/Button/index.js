import React, { Component } from 'react'
import './style.css';

class Button extends Component {
  constructor(props) {
    super(props)
    debugger
    console.log(this.props)
  }

  render() {
    return (
      <button className={'button ' + 'button-' + this.props.type}>
        <span>按钮新样式</span>
      </button>
    );
  }
}

export default Button;