import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.PureComponent {
    render () {
        return (
            <div>
                <h1>Home页面</h1>
                <Link to="/download">下载页面</Link>
                {/* <button onClick={this.props.history.push('/download')}>进入下载页面</button> */}
            </div>
        )
    }
}