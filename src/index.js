import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import createBrowserHistory from 'history/createBrowserHistory'

// 下面接入练习的项目
// 钱隆项目
// import App from './projects/qianlong'
// import App from './projects/offcial website'

// import MyRouter from './projects/mytest/index'
// import MyRouter from './projects/offcial website/index'
import Website from './projects/website/index'
import Home from './projects/website/home'

// const history = createBrowserHistory()

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

// const routes=[{
//     pathname: '/',
//     component: Home
// }]

// 引入component的入口
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render(<Router history={Router} routes={routes}/>, document.getElementById('root'))

// 引入路由的入口
// ReactDOM.render(<MyRouter />, document.getElementById('root'))


// 引入自己的网站

// ReactDOM.render(<Website />,document.getElementById('root'))

const routes = {
    path: '/',
    component: Home
}

ReactDOM.render(<Router history={routes}/>, document.getElementById('root'))