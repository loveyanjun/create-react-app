import React from 'react'

export default class Detail extends React.PureComponent {
    render () {
        return (
            <div>
                <h2>详情页</h2>
                <p>设置路由成功，是最理想的一种，以后会在这个基础上拓展下去</p>
                <a href="#/">进入首页</a>
                <br></br>
                <hr/>
                {/* <p>下面以hashHistroy方式进入详情页</p>
                <button onClick={() => this.props.history.push('home')}>通过函数进入详情页</button> */}
            </div>
        )
    }
}