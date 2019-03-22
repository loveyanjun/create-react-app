import React from 'react'
// import Cascading from './Cascading carousel/index'
import Video from './video/index'
import './style/index.css'

export default class Case extends React.PureComponent {
    render () {
        return (
            <div className="container">
                <div>
                    <h1>视频播放</h1>
                    <Video />
                </div>
            </div>
        )
    }
}