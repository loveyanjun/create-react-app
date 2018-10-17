import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './projects/qianlong/home'
import Download from './projects/qianlong/download'
import Merchant from './projects/qianlong/merchant'
// import { Router, Switch, Route } from 'react-router'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
}from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'

// 下面接入练习的项目
import App from './projects/qianlong'

const history = createBrowserHistory()

// export default class MyApp extends React.PureComponent {
//     render () {
//         return (
//         <Router>
//             <div>
//                 <ul>
//                     {/* <li>
//                         <Link to="/">App页面</Link>
//                     </li> */}
//                     <li>
//                         <Link to="/">首页</Link>
//                     </li>
//                     <li>
//                         <Link to="/download">下载页</Link>
//                     </li>
//                     <li>
//                         <Link to="/merchant">商家接入页</Link>
//                     </li>
//                 </ul>
//                 {/* <Route path="/" component={App}/> */}
//                 <Route path="/" component={Home} />
//                 <Route path="/download" component={Download} />
//                 <Route path="/merchant" component={Merchant} />
//         </div>
//         </Router>
//         )
//     }
// }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

