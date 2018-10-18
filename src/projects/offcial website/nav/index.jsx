import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Introduce from '../content/introduce'
import Tutorial from '../content/tutorial'

export default class Nav extends React.PureComponent {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">简介</Link>
                        </li>
                        <li>
                            <Link to="/tutorial">实例教程</Link>
                        </li>
                        {/* <li>
                            <Link to="/props">Props内容</Link>
                        </li>
                        <li>
                            <Link to="/state">state内容</Link>
                        </li>
                        <li>
                            <Link to="/style">样式</Link>
                        </li>
                        <li>
                            <Link to="/widthHight">宽度-高度</Link>
                        </li> */}
                    </ul>
                </div>

                <Route path="/" component={Introduce}/>
                <Route path="tutorial" component={Tutorial} />
            </Router>
            
        )
    }
}