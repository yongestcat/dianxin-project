import React from 'react'
import { Row, Col } from 'antd'
import { Carousel } from 'antd'
import PCNewsImageBlock from './pc_news_image_block'

export default class PCNewsContainer extends React.Component{
    render(){
        const contentStyle = {
            dots:true,
            autoplay:true,
            speed:500,
            slidesToShow
        };

        return (
            <div>
                <Row>
                    <Col>span={2}</Col>
                    <Col>span={20}
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...contentStyle}>
                                    <div>
                                        <img src="../../src/images/1.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../src/images/2.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../src/images/3.jpg" />
                                    </div>
                                    <div>
                                        <img src="../../src/images/4.jpg" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col>span={2}</Col>
                </Row>
            </div>

        )
    }

}