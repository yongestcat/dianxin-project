import React from 'react'
import { Row, Col } from 'antd'

export default class PCFooter extends React.Component{
    render(){
        return(
            <footer>
                <Col span={2}></Col>
                <Col span={20}>
                    &copy;&nbsp;&nbsp;&nbsp;Powered by 安徽电信
                </Col>
                <Col span={2}></Col>
            </footer>
        )
    }
 }