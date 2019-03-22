import React from 'react'
// import { Player } from 'video-react'
import 'video-react/dist/video-react.css'; // import css

export default class CaseVideo extends React.PureComponent {
    render () {
        return (
            <div>
                {/* <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></source>
                </Player> */}
                {/* <video type="video/mp4" width="500" height="500" src="./images/video.mp4" controls></video> */}
                {/* <video width="400" height="400" controls="controls">
                <source src="./images/video.mp4" type="video/mp4"></source>
                </video> */}
                {/* <video src="./images/video.mp4" autoPlay controls width="400px" heigt="400px"></video> */}
                <img src="./images/candy.png" alt=""/>
            </div>
        )
    }
}