import React, { Component } from 'react';
import './title-bar.css';

class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h1 className="title_name">{this.props.title}</h1>
         );
    }
}
 
export default TitleBar;