import React from 'react'
import * as d3 from 'd3'
import '../styles/home.css'

export default class Home extends React.PureComponent {
    componentDidMount () {
        // 圆形
        console.log(d3)
        const arr = [32, 57, 112, 293]
        const svg = d3.select('svg')
        const circle = svg.selectAll('circle').data(arr)
        const circleEnter = circle.enter().append('circle')
        circleEnter.attr('cy', 60)
        circleEnter.attr('cx', (d,i) => {
            return i * 100 + 30
        })
        circleEnter.attr('r', d => {
            return Math.sqrt(d)
        })

        // 柱状图

        const arr1 = [1,2,3,8,5,10]
        d3.select('.histogram')
            .selectAll('div')
            .data(arr1)
            .enter().append('div')
            .style('width', '50px')
            .style('height', d => {
                return d * 20 + 'px'
            })
            .style('background-color', '#ce93d8')
            .style('margin-left', d => {
                return 40 + 'px'
            })
    }

    render () {
        return (
            <div className="website-d3">
                <svg width="720" height="120" id="svg">
                    <circle cx="40" cy="60" r="10"></circle>
                    <circle cx="80" cy="60" r="10"></circle>
                    <circle cx="120" cy="60" r="10"></circle>
                </svg>

                <div className="histogram">
                </div>
            </div>
        )
    }
}