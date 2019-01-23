import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store'

import TestRedux from './projects/test-redux/index'


ReactDOM.render(
<Provider store={store}>
    <TestRedux />
</Provider>,document.getElementById('root'))
