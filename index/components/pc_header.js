import React from 'react'
import { Row, Col } from 'antd'
import { Menu } from 'antd'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons'

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current: "top"            
        };
    }

    render(){      

        return (
            <header>
                <Row>
                    <Col span={2}>col-2</Col>
                    <Col span={4}>
                        <a href="#" class="log"><img src='../../src/images/logo.png' /></a>
                        <span>电信</span>
                        </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="top"> 
                        <HomeOutlined />头条
                        </Menu.Item>
                        <Menu.Item key="shehui">
                        <SettingFilled />社会
                        </Menu.Item>
                        <Menu.Item key="guonei">
                        <SettingFilled />国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                        <SettingFilled />国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                        <SettingFilled />娱乐
                        </Menu.Item>
                        <Menu.Item key="keji">
                        <SettingFilled />科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                        <SettingFilled />时尚
                        </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}>col-2</Col>
                </Row>
            </header>
        )
    }
}