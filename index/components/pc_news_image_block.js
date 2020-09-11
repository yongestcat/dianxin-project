import React from 'react'
import { Card } from 'antd';

export default class PCNewsImageBlock extends React.Component{
    const { Meta } = Card;
    render(){
        return(
            <div class="topNewsList">
                <Card hoverable  style={{ width: 240 }}cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        )


    }


}