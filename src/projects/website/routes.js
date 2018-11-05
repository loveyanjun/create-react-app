import Home from './home'
import Nav from './nav'

const routes = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/nav',
    exact: false,
    component: Nav
}]

export default routes