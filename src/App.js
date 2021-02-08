import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.component';   

class App extends React.Component{
  //menset default value
  constructor(){
    super();

    this.state ={
      monsters: []
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
    .catch(error => console.log(error));
  }
  render(){
    return( 
      <div className="App">
       <input />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}


export default App;
