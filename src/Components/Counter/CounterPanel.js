import React, { Component } from 'react'

class CounterPanel from extends Component {
  render () {
    return (
      <Counter caption="First" initValue={0}/>
      <Counter caption="Second" initValue={1}/>
    )
  }
}
