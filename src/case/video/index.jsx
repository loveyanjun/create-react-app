import React from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'; // import css
import './style.css'

export default class CaseVideo extends React.PureComponent {
    componentDidMount() {
        // Player property
        const video = this.refs.player
        video.playbackRate = 1 // 视频播放的速度
        video.volume = 0.1 // 设置音量的大小
        const videoWidth = video.width
        const videoHeight = video.height
        console.log('Player对象：')
        console.log(video)
        console.log('视频的宽度： ' + videoWidth )
        console.log('视频高度：' + videoHeight)
        console.log('视频组件:')
        console.log(video.video)
        console.log('===============================')

        // Player method
        var getState = video.getState()
        console.log(getState)
    }

    render () {
        return (
            <div className="case-video">
                <h1>视频展示：</h1>
                {/* <video className="video" src={require('./images/video.mp4')} controls></video> */}
                
                {/* 使用video-react插件 */}
                {/* <Player>
                    <source src={require('./images/video.mp4')}></source>
                </Player> */}
                <p>Player Attribute</p>
                <Player
                className="case-video-palyer"
                ref="player"
                fluid={false}
                width={500}
                height={300}
                src={require('./images/video.mp4')}
                poster={require('./images/purple.png')}
                muted={true}
                playsInline // TODO:
                ></Player>
            </div>
        )
    }
}