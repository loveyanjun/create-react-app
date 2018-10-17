import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './projects/qianlong/home'
import Download from './projects/qianlong/download'
import { Router, Switch, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

// 下面接入练习的项目
import App from './projects/qianlong'

const history = createBrowserHistory()

// const routes = {
//     path: '/',
//     component: App,
//     childRoutes: [
//       { path: 'home', component: Home },
//       { path: 'download', component: Download },
//     ]
//   }

ReactDOM.render((
    <div>
        <Router history={history}>
            <App />
            {/* <Switch>
                <Route path="/" component={App}/>
                <Route path="/home" component={Home} />
                <Route path="/download" component={Download} />
            </Switch> */}
        </Router>
    </div>
), document.getElementById('root'));
registerServiceWorker();

