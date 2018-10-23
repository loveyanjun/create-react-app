import React from 'react'

export default class Home extends React.PureComponent {
    render () {
        return (
            <div>
                <h1>mytest主页，在这里设置路由成功</h1>
                <p>下面使用a标签进入详情页</p>
                <a href='#/detail'>进入详情页</a>
                <br></br>
                <hr/>
                <p>下面以hashHistroy方式进入详情页</p>
                <button onClick={() => this.props.history.push('detail')}>通过函数进入详情页</button>
            </div>
        )
    }
}