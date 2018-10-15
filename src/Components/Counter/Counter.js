import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

    this.state = {
      count: props.initValue || 0
    }
  }
}
