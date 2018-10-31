import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './toast.css'

class Toast extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string])
  }

  componentWillUnmount () {
    if (this.mountNode) {
      document.body.removeChild(this.mountNode)
    }
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  preventDefaultScrollBehavior = (e) => {
    e.preventDefault()
  }

  render () {
    const { children } = this.props
    return (
      <div className='toast'>{children}</div>
    )
  }
}

function showToast (toast) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<Toast children={toast} />, div)

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(div))
  }, 1500)
}

export default showToast
