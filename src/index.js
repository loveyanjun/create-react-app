import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store'

// import TestRedux from './projects/test-redux/index'
// import MyTest from './projects/website/index.js'
// import Website from './projects/offcial website'
// import Case from './case/index'
import Website from './projects/website'


ReactDOM.render(
<Provider store={store}>
    {/* <TestRedux /> */}
    {/* <MyTest /> */}
    {/* <Website /> */}
    {/* <Case /> */}
    <Website />
</Provider>,document.getElementById('root'))
