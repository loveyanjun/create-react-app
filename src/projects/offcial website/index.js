import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Nav from './nav'
import Header from './header'

// export default class OfficialWebsite extends React.PureComponent {
//     render () {
//         return (
//             <div>
//                 <Nav />
//             </div>
//         )
//     }
// }


export default basicRoute = () => (
    <Router>
        <ul>
            <li>
                <Link to="/header">进入头部页面</Link>
            </li>
            <li>
                <Link to="/nav">进入侧边导航</Link>
            </li>
        </ul>
        <Route path="/header" component={Header}/>
        <Route path="/nav" component={Nav} />
    </Router>
)