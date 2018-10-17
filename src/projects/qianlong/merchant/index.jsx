import React from 'react'
import { Link } from 'react-router-dom'

export default class Merchant extends React.PureComponent {
    render () {
        return (
            <div>
                <h1>商家接入页面</h1>
                <Link to="/">进入Home页面</Link>
            </div>
        )
    }
}