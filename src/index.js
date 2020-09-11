import React from 'react'
import ReactDom from 'react-dom'
//import './css/search.css'
import './css/search.less'
import logo from './images/logo.png'

class Search extends React.Component{
    render(){
        return <div class="search-text">Serch Text
        <img src={logo} />
        </div>
    }
}

ReactDom.render(<Search/>,document.getElementById('root'))