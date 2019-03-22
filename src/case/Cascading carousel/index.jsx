import React from 'react'
import Slider from 'react-slick'
import './style/index.css'

export default class CascadingCarousel extends React.PureComponent {
    render () {
        // const settings = {
        //     dots: true,
        //     infinite: false,
        //     speed: 500,
        //     slidesToShow: 0,
        //     slidesToScroll: 1,
        //     centerMode: true,
        //     appendDots: dots => (
        //         <div
        //           style={{
        //             backgroundColor: "#ddd",
        //             borderRadius: "10px",
        //             padding: "10px"
        //           }}
        //         >
        //           <ul style={{ margin: "0px" }}> {dots} </ul>
        //         </div>
        //       ),
        //       customPaging: i => (
        //         <div
        //           style={{
        //             width: "30px",
        //             color: "blue",
        //             border: "1px blue solid"
        //           }}
        //         >
        //           {i + 1}
        //         </div>
        //       )
        //     // dotsClass: 'horizontal',
        //     // adaptiveHeight: true
        //     // vertical: false
        // }

        const settings = {
            dots: true,
            appendDots: dots => (
                <div style={{background: 'red', padding: '10px'}}>
                    <ul style={{display: 'inline-block'}}><li style={{listStyle: 'none'}}>{dots}</li></ul>
                </div>
            ),
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div className="cascading-carousel">
                <Slider {...settings}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Slider>
                {/* <Slider {...settings}>
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </Slider>
                <Slider {...settings}>
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </Slider>
                <Slider {...settings}>
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                </Slider> */}
            </div>
        )
    }
}