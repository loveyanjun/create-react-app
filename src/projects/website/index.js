import React from 'react'
import { 
    HashRouter, Route, Switch, Router
} from 'react-router-dom'
// import ReactDom from 'react-dom';
import Home from './home'
import routes from './routes'

// export default class Website extends React.PureComponent {
//     render () {
//         return (
//             <div>hello</div>
//         )
//     }
// }

// const BasicRoute = () => (
//     <HashRouter>
//         <Switch>
//             <Route path="/" component={Home} />
//         </Switch>
//     </HashRouter>
// )

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {routes.map(route => (
                <Route path={route.path} component={route.component} />
            ))}
        </Switch>
    </HashRouter>
)

export default BasicRoute
