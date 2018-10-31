import React from 'react'
import { 
    HashRouter, Route, Switch
} from 'react-router-dom'
import Home from './home'

// export default class Website extends React.PureComponent {
//     render () {
//         return (
//             <div>hello</div>
//         )
//     }
// }

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </HashRouter>
)

export default BasicRoute