# 导入视频

对应插件：video-react

video-react github地址： https://github.com/video-react/video-react

video-react参数地址： https://video-react.js.org/components/player/

video-react中文参数介绍：https://blog.csdn.net/xue_sunshine_girl1/article/details/83505758

1、导入图片或视频使用require

2、文件需要引入这两个东西：

import { Player } from 'video-react'
import 'video-react/dist/video-react.css'; // import css

3、Player视频设置宽高，必须给<Player>的属性fluid={false}

4、volumn设置音量的大小，前提是muted为false