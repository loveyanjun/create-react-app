import React from 'react'
import * as d3 from 'd3'
import '../styles/home.css'

const data = [5, 33, 22,1,16,30,47]

const width = 500
const height = 500


const x = d3.scaleTime()
.domain(d3.extent(data, d => d.date))
.range([40, width - 30])

const y = d3.scaleLinear()
.domain([0, d3.max(data, d => d.value)]).nice()
.range([height - 30, 20])

const margin = {top: 20, right: 30, bottom: 30, left: 40}

export default class Home extends React.PureComponent {
    componentDidMount () {
        console.log(d3)
        // const arr = [32, 57, 112, 293]
        // const svg = d3.select('svg')
        // const circle = svg.selectAll('circle').data(arr)
        // const circleEnter = circle.enter().append('circle')
        // circleEnter.attr('cy', 60)
        // circleEnter.attr('cx', (d,i) => {
        //     return i * 100 + 30
        // })
        // circleEnter.attr('r', d => {
        //     return Math.sqrt(d)
        // })

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


        // 实现柱状图
        // d3.select('.chart-line').append('svg').attr('width', '500px').attr('height', '500px')
        
        // const min = d3.min(data)
        // const max = d3.max(data)
        // // 比例尺寸
        // const xScale = d3.scaleBand.domain(['2019', '2018', '2017', '2016', '2015'])
        // const yScale = d3.scaleLinear.domain([min, max])

        const svg = d3.select('chart-line')
        svg.append('g').call(this.xAxis)

        svg.append("g").call(this.yAxis)

        const line = d3.line()
        .defined(d => !isNaN(d.value))
        .x(d => x(d.date))
        .y(d => y(d.value))

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);
    }

    xAxis = g => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
    }

    yAxis = g => {
    g.attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
    }

        render () {
            return (
                <div className="website-d3">
                    <h1>d3学习</h1>
                    <div className="histogram"></div><br/>
                    {/* <svg width="720" height="120" id="svg">
                        <circle cx="40" cy="60" r="10"></circle>
                        <circle cx="80" cy="60" r="10"></circle>
                        <circle cx="120" cy="60" r="10"></circle>
                    </svg> */}
                    <div className="line-chart"></div>
                    <div className="chart"></div>
                </div>
            )
        }
}