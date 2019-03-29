import React from 'react'
import * as d3 from 'd3'

export default class BasicChart extends React.PureComponent {
    componentDidMount () {
        console.log(d3)
        // 圆
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
            .style('width', '30px')
            .style('height', d => {
                return d * 20 + 'px'
            })
            .style('background-color', '#ce93d8')
            .style('margin-left', d => {
                return 40 + 'px'
            })

     // 简单练习
     d3.select('.test').style('color', 'blue').html('test d3 API')
    

     // 水平坐标轴、垂直坐标轴练习
     const margin = { top: 20, right: 50, bottom: 30, left: 50 }
     const height = 500
    const bottom = d3.scaleLinear().range([0, 800]).domain([0,800]) // domain定义域  // range值域
    const bAxis = d3.axisBottom().scale(bottom)
    .tickPadding(10)
    .tickArguments([10]) // 定义坐标轴上有几个值
    // .tickValues([1, 5, 10, 15, 10])
    

    const left = d3.scaleLinear().domain([0, height]).range([0, height]);
    const lAxis = d3.axisLeft().scale(left)
    .tickPadding(2)
    .tickArguments([6])
    // .ticks(10)
    // .tickValues([50, 100, 150, 200])
    .tickSizeOuter(20)
    
    const axisSvg = d3.select(".axis").append("svg")
    axisSvg.append("g").attr("transform", `translate(${margin.left}, ${height})`).call(bAxis) 
    axisSvg.append("g").attr("transform", `translate(${margin.left},${margin.top})`).call(lAxis)

    axisSvg.attr("class", "axis-svg")
    .attr("width", 1000)
    .attr("height", 700)
    .attr('color', '#fff')
    }

    render () {
        return (
            <div className="basic-chart">
                {/* 柱状图 */}
                <div className="histogram"></div><br/>

                {/* 圆圈 */}
                <svg width="720" height="120" id="svg">
                    <circle cx="40" cy="60" r="10"></circle>
                    <circle cx="80" cy="60" r="10"></circle>
                    <circle cx="120" cy="60" r="10"></circle>
                </svg>

                {/* 简单练习 */}
                <div className="test" id="test"></div>

                {/* 水平坐标、垂直坐标 */}
                <div className="axis"></div>
            </div>
        )
    }
}