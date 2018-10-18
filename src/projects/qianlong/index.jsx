import React from 'react'
import Home from './home'
import Download from './download'
import Merchant from './merchant'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
}from 'react-router-dom'

// 未使用react-router

/*
export default class QianLongApp extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            route: window.location.hash.substring(1)
        }
    }

    componentDidMount () {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substring(1)
            })
        })
    }

    render () {
        let Child = null
        switch (this.state.route) {
            case '/home':
                Child = Home
                break;
            case '/download':
                Child = Download
                break;
            case '/merchant': 
                Child = Merchant
                break;
            default:
                Child = Home
        }

        return (
            <div>
                <h1>App组件</h1>
                <ul>
                    <li><a href="#/home">首页</a></li>
                    <li><a href="#/download">下载页面</a></li>
                    <li><a href="#/merchant">商家接入</a></li>
                </ul>
                <Child />
            </div>
        )
    }
}

*/

export default class App extends React.PureComponent {
    render () {
        return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/download" component={Download} />
                    <Route path="/merchant" component={Merchant} />
                </Switch>
            </div>
        </Router>
        )
    }
}
'/Users/liyanjun/Documents/mbr/chainlong/src/static/images/manage.png'