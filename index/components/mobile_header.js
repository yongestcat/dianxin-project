import React from 'react'
import { Row, Col } from 'antd'

export default class MobileHeader extends React.Component{
    render(){
        return(
            <div id="mobileHeader">
                    <a href="#" class="log"><img src='../../src/images/logo.png' /></a>
                    <span>电信</span>
            </div>
        )
    }
 }