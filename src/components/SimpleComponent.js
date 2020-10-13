// Code SimpleComponent Here

import React, {Component} from 'react';


export default class  SimpleComponent extends Component {
    state = {
      mood:'happy'
    }

     
   
    handleClick = () => {
      // Probably do some work to update the state
if (this.state.mood ==='happy')
this.setState({mood:'sad'})
else {
  this.setState ({mood:'happy'})
}
}
      
   
    render() {
      return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
    )

      
      // Return JSX that renders into HTML
   
    
    }
  }