import React from 'react'
import ReactDom from 'react-dom'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'
import { Button } from 'antd'

import PCIndex from '../index/components/pc_index'
import MobileIndex from '../index/components/mobile_index'

class Root extends React.Component{
    render(){
        return (
        <div>
            <Button type="primary">Primary Button</Button>
          <MediaQuery query="(min-device-width:1224px)">
              <PCIndex></PCIndex>
          </MediaQuery>
          <MediaQuery query="(max-device-width:1223px)">
              <MobileIndex></MobileIndex>
          </MediaQuery>          
        </div>
        )
    }
}

ReactDom.render(
    <Root/>,
    document.getElementById('root')
)