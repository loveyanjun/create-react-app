import React from 'react'
import BindChartD3 from './band-chart'
// import BasicChart from './basic-chart'
import '../styles/home.css'

export default class Home extends React.PureComponent {
        render () {
            return (
                <div className="website-d3">
                    {/* <BasicChart /> */}

                    {/* 折线图 */}
                    <BindChartD3 />
                </div>
            )
        }
}