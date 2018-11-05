import React from 'react'
import { 
    HashRouter, Route, Switch
} from 'react-router-dom'
// import ReactDom from 'react-dom';
// import Home from './home'
// import Nav from './nav'
import routes from './routes'

// const BasicRoute = () => (
//     <HashRouter>
//         <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/nav" component={Nav}/>
//         </Switch>
//     </HashRouter>
// );

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            {routes.map(route => (
                <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))}
        </Switch>
    </HashRouter>
);

export default BasicRoute
