import React from 'react'
import { Link } from 'react-router-dom'

export default class Download extends React.PureComponent {
    render () {
        return (
            <div>
                <h1>下载页面</h1>
                <Link to="/merchant">进入商家接入页面</Link>
            </div>
        )
    }
}