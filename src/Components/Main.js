import React, {Component} from "react";
import Title from './Title';
import List from './List';

class Main extends Component{
    render(){
      return (
        <div>
          <Title title = 'toDos'/>
          <span>
            <List tasks = {['Go get a good job','Now get a life','Travel more and enjoy life']}/>
          </span>
          <span>
            <List tasks = {['Invest','Save money','Live an awesome life']}/>
          </span>
        </div>
      )
    }
  }

export default Main