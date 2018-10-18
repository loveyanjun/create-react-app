import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Nav from './nav'

export default class OfficialWebsite extends React.PureComponent {
    render () {
        return (
            <div>
                <Nav />
            </div>
        )
    }
}